import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { sendContactEmail } from "../../actions/contact.query";

export async function POST(request: NextRequest) {
  try {
    // 1) Parse the request body
    const { name, email, message } = await request.json();

    // Capture "info" returned by sendContactEmail
    const info = await sendContactEmail({ name, email, message });

    // 5) Respond to the client
    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
} 