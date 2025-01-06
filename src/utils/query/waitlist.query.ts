"use server";

import { createClient } from "@/utils/supabase/client";
import { MumuWaitlistUser, MumuWaitlistBusinessOwner } from "@/types/user.types";

function isMumuWaitlistUser(record: any): record is MumuWaitlistUser {
    return 'email' in record;
}

function isMumuWaitlistBusinessOwner(record: any): record is MumuWaitlistBusinessOwner {
    return 'mbo_name' in record && 'mbo_email' in record && 'mbo_weblink' in record && 'mbo_number' in record;
}


// ANCHOR: Insert Record of Type <MumuWaitlistUser | MumuWaitlistBusinessOwner> to Database
async function insertRecord<T>(
    table: string,
    record: T
) {
    try {
        const client = createClient();

        if (isMumuWaitlistUser(record)) {
            const { data, error } = await createClient()
                .from(table)
                .insert([{
                    email: record.email,
                }])
                .single();

            if (error) {
                throw new Error(error?.message || "Inserting Record to Database Operation Failed.");
            }

            // TODO: Refactor Code.
            return {
                success: true,
                data: data
            }

        } else if (isMumuWaitlistBusinessOwner(record)) {
            const { data, error } = await client
                .from(table)
                .insert([{
                    mbo_name: record.mbo_name,
                    mbo_email: record.mbo_email,
                    mbo_weblink: record.mbo_weblink,
                    mbo_number: record.mbo_number,
                }])
                .single();

            if (error) {
                throw new Error(error?.message || "Inserting Record to Database Operation Failed.");
            }

            // TODO: Refactor Code.
            return {
                success: true,
                data: data
            }

        } else {
            throw new Error(`Invalid record type: ${(record as any).constructor.name}`);

        }

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