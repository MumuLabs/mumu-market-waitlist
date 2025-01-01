import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { toast } from "sonner";

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
    },
} as SMTPTransport.Options);

type MailData = {
    email: string;
    subject: string;
    content: string;
}

export async function sendMail(data: MailData) {
    try {
        const { email, subject, content } = data;

        const mailContent = {
            from: email,
            to: "mumu.market.causa@gmail.com",
            subject: `${subject}`,
            html: `
            ${content}
            `
        };
        await transport.sendMail(mailContent);

        return NextResponse.json(
            {
                success: true,
                message: "Email was successfully sent and we'll get back to you soon."
            },
            {
                status: 200,
            }
        );

    } catch (error) {
        toast.error("Failed to send an email, please try again later.");
        return false;
    }
}