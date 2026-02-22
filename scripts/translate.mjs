import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/i18n/en.json'), 'utf-8'));

const API_KEY = '7849b2ff-8c94-4dae-9878-0400bcba9902:fx';
const API_URL = 'https://api-free.deepl.com/v2/translate';

// Brand terms to preserve
const BRAND_TERMS = ['Spielzüge', 'Leon Freier', 'ApexAlpha', 'ForgeHouse', 'Da Nang Beach Villas', 'EOS'];

function flattenObj(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null) {
      Object.assign(result, flattenObj(v, key));
    } else {
      result[key] = v;
    }
  }
  return result;
}

function unflattenObj(obj) {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    const parts = key.split('.');
    let cur = result;
    for (let i = 0; i < parts.length - 1; i++) {
      cur[parts[i]] = cur[parts[i]] || {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = val;
  }
  return result;
}

async function translateBatch(texts, targetLang) {
  // DeepL has limits, batch in groups of 50
  const results = [];
  for (let i = 0; i < texts.length; i += 50) {
    const batch = texts.slice(i, i + 50);
    const params = new URLSearchParams();
    for (const t of batch) {
      params.append('text', t);
    }
    params.append('target_lang', targetLang);
    params.append('source_lang', 'EN');
    
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    
    if (!resp.ok) {
      console.error(`DeepL error: ${resp.status} ${await resp.text()}`);
      process.exit(1);
    }
    
    const data = await resp.json();
    results.push(...data.translations.map(t => t.text));
  }
  return results;
}

// Keys to skip translating (brand terms, labels that stay as-is)
const SKIP_KEYS = new Set([
  'nav.spielzuege',
  'spielzuege_index.title',
  'lang_switcher.en',
  'lang_switcher.vi',
  'lang_switcher.zh',
]);

async function translateLocale(targetLang, filename) {
  const flat = flattenObj(en);
  const keys = Object.keys(flat);
  const values = Object.values(flat);
  
  // Protect brand terms with XML tags for DeepL
  const prepared = values.map((v, i) => {
    if (SKIP_KEYS.has(keys[i])) return null; // skip
    let text = v;
    let idx = 0;
    const replacements = [];
    for (const term of BRAND_TERMS) {
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      text = text.replace(regex, (match) => {
        replacements.push(match);
        return `<x id="${idx++}">${match}</x>`;
      });
    }
    return { text, replacements };
  });
  
  // Collect texts to translate
  const toTranslate = [];
  const translateIndices = [];
  for (let i = 0; i < prepared.length; i++) {
    if (prepared[i] !== null) {
      toTranslate.push(prepared[i].text);
      translateIndices.push(i);
    }
  }
  
  console.log(`Translating ${toTranslate.length} strings to ${targetLang}...`);
  
  // Use tag_handling for XML
  const results = [];
  for (let i = 0; i < toTranslate.length; i += 50) {
    const batch = toTranslate.slice(i, i + 50);
    const params = new URLSearchParams();
    for (const t of batch) {
      params.append('text', t);
    }
    params.append('target_lang', targetLang);
    params.append('source_lang', 'EN');
    params.append('tag_handling', 'xml');
    params.append('ignore_tags', 'x');
    
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    
    if (!resp.ok) {
      console.error(`DeepL error: ${resp.status} ${await resp.text()}`);
      process.exit(1);
    }
    
    const data = await resp.json();
    results.push(...data.translations.map(t => t.text));
  }
  
  // Build translated flat object
  const translated = {};
  let ri = 0;
  for (let i = 0; i < keys.length; i++) {
    if (SKIP_KEYS.has(keys[i])) {
      translated[keys[i]] = values[i];
    } else {
      // Strip XML tags, keep inner content
      let text = results[ri++];
      text = text.replace(/<x id="\d+">(.*?)<\/x>/g, '$1');
      // Remove em dashes
      text = text.replace(/—/g, ' - ');
      translated[keys[i]] = text;
    }
  }
  
  const result = unflattenObj(translated);
  fs.writeFileSync(
    path.join(__dirname, `../lib/i18n/${filename}`),
    JSON.stringify(result, null, 2) + '\n'
  );
  console.log(`Wrote ${filename}`);
}

await translateLocale('VI', 'vi.json');
await translateLocale('ZH', 'zh.json');
console.log('Done!');
