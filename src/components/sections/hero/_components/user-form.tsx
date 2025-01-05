import React from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormButton } from "./form-button";
import { FormInput } from "./form-input";
import { createClient } from "@/utils/supabase/client";
import { MumuWaitlistUser } from "@/types/user.types";
import { mumuUserSchema } from "@/utils/schema";
import { toast } from "sonner";


export const MumuWaitListUserForm = () => {
    const {
        control,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm<MumuWaitlistUser>({
        resolver: zodResolver(mumuUserSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (user: MumuWaitlistUser) => {
        try {
            const { data, error } = await createClient().from("mumu_waitlist_user").insert([
                {
                    email: user.email,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]);

            if (error) throw new Error(`Error Creating Mumu User: ${error}`);

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
                name="email"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Email"
                        type="email"
                        {...field}
                        placeholder="Enter your email..."
                    />
                )}
            />
            {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
            )}
            <FormButton text="Submit" />
        </form>
    );
};