"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

// Import your form components (adjust imports/paths as needed)
import { FormInput } from "@/components/sections/hero/_components/form-input";
import { FormButton } from "@/components/sections/hero/_components/form-button";

interface ContactUsFormProps {
  onSuccess?: () => void;
}

// Define the shape of your contact form data
type ContactUsFormInputs = {
  name: string;
  email: string;
  message: string;
};

export function ContactUsForm({ onSuccess }: ContactUsFormProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactUsFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: ContactUsFormInputs) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send.");

      toast.success("Your message has been sent!");
      reset();        // Clear out the form
      onSuccess?.();  // Close the modal or do whatever on success
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <FormInput
            label="Name"
            placeholder="Enter your name..."
            {...field}
          />
        )}
      />
      {errors.name && (
        <p className="text-red-500">{errors.name.message}</p>
      )}

      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Please enter a valid email address",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email..."
            {...field}
          />
        )}
      />
      {errors.email && (
        <p className="text-red-500">{errors.email.message}</p>
      )}

      {/* Message Field (Textarea) */}
      <Controller
        name="message"
        control={control}
        rules={{ required: "Message is required" }}
        render={({ field }) => (
          // If your FormInput doesn't support a textarea, you can create a separate FormTextArea
          // Or pass an “as” prop if your FormInput is built to handle multiple element types
          <FormInput
            label="Message"
            placeholder="Enter your message..."
            // as="textarea" // <-- only if your FormInput supports it
            {...field}
          />
        )}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      {/* Submit Button */}
      <FormButton text="Send" />
    </form>
  );
}