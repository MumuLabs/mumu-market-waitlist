"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const emailContent = message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: emailContent,
    replyTo: email,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
} 