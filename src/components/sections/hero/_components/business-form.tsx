import React from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { createClient } from "@/utils/supabase/client";
import { MumuWaitlistBusinessOwner } from "@/types/user.types";
import { mumuBusinessOwnerSchema } from "@/utils/schema";
import { toast } from "sonner";

export const MumuWaitListBusinessForm = () => {
    const {
        control,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm<MumuWaitlistBusinessOwner>({
        resolver: zodResolver(mumuBusinessOwnerSchema),
        defaultValues: {
            mbo_name: "",
            mbo_email: "",
            mbo_weblink: "",
            mbo_number: "",
        },
    });

    const onSubmit = async (user: MumuWaitlistBusinessOwner) => {
        try {
            const { data, error } = await createClient().from("mumu_waitlist_business_owner").insert([
                {
                    ...user,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }
            ]);

            if (error) throw new Error(`Error Creating Mumu Business Owner: ${error}`);
            
            // TODO: Remove console.log() after testing.
            console.log(data);

            toast.success("You Have Been Added to Waitlist!");

            reset();

        } catch (error) {
            console.error("Something went wrong: ", error);

            const promise = () => new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 3000);
            });

            toast.promise(promise, {
                loading: "Adding You to Waitlist...",
                success: (data) => {
                    if (data == true) {
                        return "You Have Been Added to Waitlist!";
                    } 

                    return "Something Went Wrong, Please Try Again Later.";
                },
                error: `Something Went Wrong, Please Try Again Later. Error: ${error}`
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Controller
                name="mbo_name"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Business Name"
                        {...field}
                        placeholder="Enter Your Business Name..."
                    />
                )}
            />
            {errors.mbo_name && (
                <p className="text-red-500">{errors.mbo_name.message}</p>
            )}

            <Controller
                name="mbo_email"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Business Email"
                        type="email"
                        {...field}
                        placeholder="Enter Your Business Email..."
                    />
                )}
            />
            {errors.mbo_email && (
                <p className="text-red-500">{errors.mbo_email.message}</p>
            )}

            <Controller
                name="mbo_weblink"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Business Website (Optional)"
                        {...field}
                        placeholder="Enter Your Business Website..."
                    />
                )}
            />
            {errors.mbo_weblink && (
                <p className="text-red-500">{errors.mbo_weblink.message}</p>
            )}

            <Controller
                name="mbo_number"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Contact Number (Optional)"
                        {...field}
                        placeholder="Enter Your Contact Number..."
                    />
                )}
            />
            {errors.mbo_number && (
                <p className="text-red-500">{errors.mbo_number.message}</p>
            )}
            <FormButton text="Submit" />
        </form>
    );
};