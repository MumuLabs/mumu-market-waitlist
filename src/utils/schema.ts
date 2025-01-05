import { z } from "zod";

export const mumuUserSchema = z.object({
    email: z
        .string()
        .min(1, "Provided email is not a valid email.")
        .email("Provided email is not a valid email."),
});

export const mumuBusinessOwnerSchema = z.object({
    mbo_name: z
        .string()
        .min(1, "Provided Business Name is not valid.")
        .max(100, "Provided Business Name is too long."),
    mbo_email: z
        .string()
        .min(1, "Provided Email is too short and not valid.")
        .email("Provided Email is not valid."),
    mbo_weblink: z
        .string()
        .min(1, "Provided Website URL is too short.")
        .url("Provided Website URL is not valid.")
        .optional(),
    mbo_number: z
        .string()
        .min(1, "Provided Phone Number is too short.")
        .max(10, "Provided Phone Number is too long.")
        .regex(/^\+?[1-9]\d{1,14}$/, "Provided Phone Number is not in  valid format.")
        .optional(),
});

export type mumuUserSchema = z.infer<typeof mumuUserSchema>;
export type mumuBusinessOwnerSchema = z.infer<typeof mumuBusinessOwnerSchema>;