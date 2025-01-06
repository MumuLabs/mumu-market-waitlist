"use client";

import React, { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact.query";
import { toast } from "sonner";

interface ContactUsFormProps {
  onSuccess?: () => void;
}

export function ContactUsForm({ onSuccess }: ContactUsFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      toast.success("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
      onSuccess?.();
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-1">Name</label>
        <input
          className="border border-gray-300 rounded w-full px-3 py-2"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name..."
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input
          className="border border-gray-300 rounded w-full px-3 py-2"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email..."
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Message</label>
        <textarea
          className="border border-gray-300 rounded w-full px-3 py-2"
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Enter your message..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-primary-color text-white px-4 py-2 rounded"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}