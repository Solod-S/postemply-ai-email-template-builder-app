import { GenerateEmailTemplateAiModel } from "@/config/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await GenerateEmailTemplateAiModel.sendMessage(prompt);
    const aiResp = result.response.text();

    return NextResponse.json(JSON.parse(aiResp));
  } catch (error) {
    console.error("Error in /api/ai-email-generate:", error);
    return NextResponse.json({ error });
  }
}
