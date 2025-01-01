"use client";

import React, { useState } from "react";

interface FormData {
	subject: string;
	email: string;
	content: string;
}

// TODO: Add this to a later patch / launch of the website, this is not necessary rn (looks bad too).
export function ContactUs() {
	const [formData, setFormData] = useState<FormData>({
		subject: "",
		email: "",
		content: "",
	});
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus({ type: "success", message: "Email sent successfully!" });
				setFormData({ subject: "", email: "", content: "" });
			} else {
				setStatus({
					type: "error",
					message: data.error || "Failed to send email",
				});
			}
		} catch (error) {
			setStatus({ type: "error", message: "Failed to send email" });
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section id="contact-us" className="py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Contact Us
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-white/70">
						Are you looking for a way to get in touch with us? Fill out the form
						below and we will get back to you as soon as possible.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="mt-8 space-y-6 mx-auto max-w-xl"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2 focus:border-[#d4a595] focus:ring-[#d4a595]"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-white"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2 focus:border-[#d4a595] focus:ring-[#d4a595]"
							placeholder="What's this about?"
						/>
					</div>

					<div>
						<label
							htmlFor="content"
							className="block text-sm font-medium text-white"
						>
							Message
						</label>
						<textarea
							id="content"
							name="content"
							value={formData.content}
							onChange={handleChange}
							required
							rows={4}
							className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white px-3 py-2 focus:border-[#d4a595] focus:ring-[#d4a595]"
							placeholder="The message you want to send here..."
						/>
					</div>

					<div>
						<button
							type="submit"
							className="w-full rounded-md bg-[#d4a595] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e7b7a7] focus:outline-none focus:ring-2 focus:ring-[#d4a595]/90"
						>
							Send Message
						</button>
					</div>

					{status.message && (
						<div
							className={`text-center p-2 rounded ${
								status.type === "success" ? "bg-green-600" : "bg-red-600"
							} text-white`}
						>
							{status.message}
						</div>
					)}
				</form>
			</div>
		</section>
	);
}
