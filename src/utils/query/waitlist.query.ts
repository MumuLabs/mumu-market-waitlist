"use server";

import { createClient } from "@/utils/supabase/client";
import { MumuWaitlistUser, MumuWaitlistBusinessOwner } from "@/types/user.types";

// ANCHOR: Insert Record of Type <MumuWaitlistUser | MumuWaitlistBusinessOwner> to Database
async function insertRecord<T>(table: string, record: T) {
    try {
        const { data, error } = await createClient().from(table).insert([record]);

        if (!data || error) {
            throw new Error(error?.message || "Inserting Record to Database Operation Failed.");
        }

        return { success: true, data: data![0] };

    } catch (error) {
        const errMessage =
            error instanceof Error ? error.message : "Unknown Error Occured (UEO)";

        return { success: false, error: errMessage };
    }
}

// ANCHOR: Function for MumuWaitlistUser
export async function insertMumuWaitlistUser(user: MumuWaitlistUser) {
    const response = await insertRecord("mumu_waitlist_user", user);

    if (!response.success) {
        throw new Error(response.error);
    }

    return response.data;
}

// ANCHOR: Function for MumuWaitlistBusinessOwner
export async function insertMumuWaitlistBusinessOwner(user: MumuWaitlistBusinessOwner) {
    const response = await insertRecord("mumu_waitlist_business_owner", user);

    if (!response.success) {
        throw new Error(response.error);
    }

    return response.data;
}