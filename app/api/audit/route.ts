import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const auditSchema = z.object({
  url: z.string().url(),
  email: z.string().email().optional(),
  businessType: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const data = auditSchema.parse(await req.json());
    // TODO: integrate with Anthropic SDK for AI-powered audit
    console.log("AEO audit requested:", data);
    return NextResponse.json({
      success: true,
      message: "Audit queued. Results will be emailed shortly.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
