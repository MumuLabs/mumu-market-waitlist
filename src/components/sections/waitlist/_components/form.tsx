import React from "react";

import { useState } from "react";
import { MumuWaitlistUser } from "@/types/user.types";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { InputField } from "@/components/sections/waitlist/_components/input-field";
import { Button } from "@/components/sections/waitlist/_components/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const userSchema = z.object({
	username: z.string().min(3).max(50),
	email: z.string().email().optional(),
	is_business_owner: z.boolean().optional(),
	business_name: z.string().min(3).max(20).optional(),
});

export function WaitlistForm() {
	const [isBusinessOwner, setIsBusinessOwner] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm({
		resolver: zodResolver(userSchema),
		defaultValues: {
			username: "",
			email: "",
			is_business_owner: false,
			business_name: "",
		},
	});

	const clearBusinessNameWhenCheckboxIsUnchecked = () => {
		if (!isBusinessOwner) {
			setIsBusinessOwner(false);
			setValue("business_name", "");
		}
	};

	// ANCHOR: Trigger useEffect When isBusinessOwer State Changes
	React.useEffect(() => {
		clearBusinessNameWhenCheckboxIsUnchecked();
	}, [isBusinessOwner]);

	const onSubmitForm = (data: {
		username: string;
		email?: string;
		is_business_owner?: boolean;
		business_name?: string;
	}) => {
		toast.success("Success! Thank you for joining Mumu 🎉");

		console.log("Data: ", data);
		reset();

		// TODO: Add Logic to Store the Data in Supabase Database, and Brevo API
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
			<Controller
				name="username"
				control={control}
				render={({ field }) => (
					<InputField
						label="Username"
						{...field}
						placeholder="Enter a valid username..."
					/>
				)}
			/>
			{errors.username && (
				<p className="text-red-500">{errors.username.message}</p>
			)}

			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<InputField
						label="Email"
						type="email"
						{...field}
						placeholder="Enter a valid email address..."
					/>
				)}
			/>
			{errors.email && <p className="text-red-500">{errors.email.message}.</p>}

			<div className="flex items-center space-x-2">
				<Controller
					name="is_business_owner"
					control={control}
					render={({ field }) => (
						<Checkbox
							id="is_business_owner"
							checked={field.value}
							className="text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							onCheckedChange={(checked: boolean) => {
								field.onChange(checked);
								setIsBusinessOwner(checked);
							}}
						/>
					)}
				/>
				<label
					htmlFor="is_business_owner"
					className="text-sm text-white/70 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Are You A Business Owner?
				</label>
			</div>

			{isBusinessOwner && (
				<Controller
					name="business_name"
					control={control}
					render={({ field }) => (
						<InputField
							label="Business Name"
							{...field}
							placeholder="Enter your business name here..."
						/>
					)}
				/>
			)}

			<Button text="Join Waitlist" className="w-full text-white" />
		</form>
	);
}
