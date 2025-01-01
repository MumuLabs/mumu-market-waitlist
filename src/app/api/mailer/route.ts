import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT || "587"),
	secure: process.env.SMTP_SECURE === "true",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export async function POST(request: Request) {
	try {
		const { email, subject, content } = await request.json();

		if (!email || !subject || !content) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		await transporter.sendMail({
			from: process.env.SMTP_FROM!,
			to: process.env.SMTP_TO!,
			replyTo: email,
			subject: `Contact Form: ${subject}`,
			text: `
From: ${email}
Subject: ${subject}

Message:
${content}
            `,
			html: `
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h3>Message:</h3>
<p>${content.replace(/\n/g, "<br>")}</p>
            `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(`Error sending email: ${error}`);

		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}

// ANCHOR: Handle When a User Submits a Contact Form
// ANCHOR: This is not being used in the current version of the website.
