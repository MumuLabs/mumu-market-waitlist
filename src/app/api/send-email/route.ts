"use server";

import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: NextRequest) {
	try {
		const { email, subject, content } = await request.json();
		const response = await sendMail({ email, subject, content });

		return NextResponse.json(response);

	} catch (error) {
		console.error(`Error sending email: ${error}`);

		return NextResponse.json(
			{ error: "Failed to send an email, please try again later." },
			{ status: 500 },
		);
	}
}
