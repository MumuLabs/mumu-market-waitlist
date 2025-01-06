import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { sendContactEmail } from "@/utils/query/contact.query";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();


    const info = await sendContactEmail({
      name,
      email,
      message
    });


    return NextResponse.json({ success: true, info });


  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });

  }
} 