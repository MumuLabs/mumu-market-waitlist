import React from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormButton } from "./form-button";
import { FormInput } from "./form-input";
import { insertMumuWaitlistUser } from "@/utils/query/waitlist.query";
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
            const response = await insertMumuWaitlistUser(user);

            // TODO: Remove console.log() after testing.
            console.log(response);

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