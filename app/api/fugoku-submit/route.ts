import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { sections } = data;

    if (!sections || !Array.isArray(sections)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Format message
    let msg = "📋 *Fugoku EOS Homework Submitted*\n\n";

    for (const section of sections) {
      const hasContent = section.answer?.trim() || 
        section.fields?.some((f: { label: string; value: string }) => f.value?.trim());
      
      if (!hasContent) continue;

      msg += `*${section.num} — ${section.title}*\n`;

      if (section.fields?.length) {
        for (const field of section.fields) {
          if (field.value?.trim()) {
            msg += `_${field.label}:_ ${field.value.trim()}\n`;
          }
        }
      }

      if (section.answer?.trim()) {
        msg += `${section.answer.trim()}\n`;
      }

      msg += `\n`;
    }

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    // Split if message is too long (Telegram limit 4096)
    const chunks: string[] = [];
    if (msg.length > 4000) {
      const lines = msg.split("\n");
      let chunk = "";
      for (const line of lines) {
        if (chunk.length + line.length + 1 > 4000) {
          chunks.push(chunk);
          chunk = "";
        }
        chunk += line + "\n";
      }
      if (chunk.trim()) chunks.push(chunk);
    } else {
      chunks.push(msg);
    }

    for (const chunk of chunks) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          parse_mode: "Markdown",
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
