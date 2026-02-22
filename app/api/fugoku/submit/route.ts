import { NextResponse } from "next/server";

interface FormData {
  coreValues: string[];
  purpose: string;
  niche: string;
  tenYearTarget: string;
  threeYearRevenue: string;
  threeYearProfit: string;
  threeYearTeam: string;
  threeYearCustomers: string;
  threeYearWorld: string;
  oneYearRevenue: string;
  oneYearCustomers: string;
  oneYearGoals: string[];
  rocks: { description: string; owner: string; due: string }[];
  avoidingQuestion: string;
}

function formatForTelegram(data: FormData): string {
  const lines: string[] = [];
  lines.push("🔔 *Fugoku VTO Submission*\n");

  const values = data.coreValues.filter(Boolean);
  if (values.length) {
    lines.push("*Core Values:* " + values.join(", "));
  }

  if (data.purpose) lines.push("\n*Purpose:* " + data.purpose);
  if (data.niche) lines.push("*Niche:* " + data.niche);
  if (data.tenYearTarget) lines.push("\n*10-Year Target:* " + data.tenYearTarget);

  const has3yr = data.threeYearRevenue || data.threeYearProfit || data.threeYearTeam || data.threeYearCustomers;
  if (has3yr) {
    lines.push("\n*3-Year Picture:*");
    if (data.threeYearRevenue) lines.push("  Revenue: " + data.threeYearRevenue);
    if (data.threeYearProfit) lines.push("  Profit: " + data.threeYearProfit);
    if (data.threeYearTeam) lines.push("  Team: " + data.threeYearTeam);
    if (data.threeYearCustomers) lines.push("  Customers: " + data.threeYearCustomers);
  }
  if (data.threeYearWorld) lines.push("  World: " + data.threeYearWorld);

  const has1yr = data.oneYearRevenue || data.oneYearCustomers;
  if (has1yr) {
    lines.push("\n*1-Year Plan:*");
    if (data.oneYearRevenue) lines.push("  Revenue: " + data.oneYearRevenue);
    if (data.oneYearCustomers) lines.push("  Customers: " + data.oneYearCustomers);
  }

  const goals = data.oneYearGoals.filter(Boolean);
  if (goals.length) {
    lines.push("\n*Goals:*");
    goals.forEach((g, i) => lines.push(`  ${i + 1}. ${g}`));
  }

  const rocks = data.rocks.filter((r) => r.description);
  if (rocks.length) {
    lines.push("\n*Rocks (90 days):*");
    rocks.forEach((r, i) => {
      let line = `  R${i + 1}: ${r.description}`;
      if (r.owner) line += ` (${r.owner})`;
      if (r.due) line += ` — due ${r.due}`;
      lines.push(line);
    });
  }

  if (data.avoidingQuestion) {
    lines.push("\n*Avoiding:* " + data.avoidingQuestion);
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM env vars");
      return NextResponse.json({ ok: true }); // still accept submission
    }

    const text = formatForTelegram(data);

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
