"use client";

import { MailIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface FormData {
	subject: string;
	email: string;
	content: string;
}

export function ContactUs() {
	const [formData, setFormData] = useState<FormData>({
		subject: "",
		email: "",
		content: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				toast.error("Failed to send email, please try again later.");
				return;
			}

			if (data.error) {
				toast.error(data.error);
				setFormData({ subject: "", email: "", content: "" });
				return;
			}

			toast.success("Email was sent successfully! We'll get back to you soon.");
			setFormData({ subject: "", email: "", content: "" });
			return;

		} catch (error) {
			toast.error("Failed to send email, something went wrong.");
			console.error(error);
			return;
		}
	};

	return (
		<section id="contact-us">
			<div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-[940px] rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-slate-300">
				<div className="flex flex-col justify-between h-full">
					<div>
						<h1 className="text-3xl font-extrabold text-white">Let's Talk!</h1>
						<p className="text-sm text-slate-200 mt-3">
							Have a partnership or idea in mind? Reach out to us and we'd love
							to hear about whatever you have on your mind. We make sure to
							respond within 24 hours at the latest to ensure all your inquiries
							are addressed in a timely manner.
						</p>
					</div>
					<div className="flex items-center">
						<MailIcon className="w-6 h-6 text-slate-200 mr-2" />
						<strong className="text-sm text-white">
							mumu.market.causa@gmail.com
						</strong>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="sm:col-span-2 md:col-span-1 grid grid-cols-2 gap-4"
				>
					<input
						type="text"
						className="px-4 py-3 border bg-transparent text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b06e54] rounded-2xl col-span-2"
						placeholder="Enter your name"
						name="Name"
						required
					/>
					<input
						type="email"
						className="px-4 py-3 border bg-transparent text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b06e54] rounded-2xl col-span-2"
						placeholder="Enter your email"
						name="Email"
						required
					/>
					<textarea
						name="Message"
						placeholder="Type your message here..."
						className="px-4 py-3 border bg-transparent text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b06e54] rounded-2xl col-span-2"
						rows={6}
						maxLength={1000}
						minLength={10}
						style={{ resize: "none" }}
						required
					></textarea>
					<button
						type="submit"
						className="h-12 col-span-2 text-white text-sm font-extrabold rounded-3xl bg-gradient-to-b from-[#d4a595] to-[#d4a595]/80 via-[#d4a595]/80 hover:scale-120 transition-transform duration-300"
					>
						SEND
					</button>
				</form>
			</div>
		</section>
	);
}
