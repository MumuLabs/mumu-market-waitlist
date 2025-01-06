"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

import { FormInput } from "@/components/sections/hero/_components/form-input";
import { FormButton } from "@/components/sections/hero/_components/form-button";
import { FormTextArea } from "./form-text-area";

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

  const onSubmit = async (data: ContactUsFormInputs) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong, failed to send a message.");

      toast.success("Success! We'll get back to you soon.");
      reset();
      onSuccess?.();

    } catch (error) {
      toast.error("Something went wrong. Please try again.");

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <Controller
        name="message"
        control={control}
        rules={{ required: "Message is required" }}
        render={({ field }) => (
          <FormTextArea
            label="Message:"
            placeholder="Enter your message..."
            {...field}
          />
        )}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <FormButton text="Send" />
    </form>
  );
}