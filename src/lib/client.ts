"use server";

import { client } from "@/lib/supabase/server";
import { MumuWaitlistUser } from "@/types/user.types";

// ANCHOR: Helper Function: insertRecord()
const insertRecord = async (tableName: string, user: MumuWaitlistUser) => {
	try {
		const { data, error } = await client.from(tableName).insert([
			{
				username: user.username,
				email: user.email,
				is_business_owner: user.is_business_owner,
				business_name: user.business_name ?? "",
				created_at: user.created_at,
				updated_at: user.updated_at,
			},
		]);

		if (!data) {
			throw new Error(error?.message);
		}

		return { success: true, data: data![0] };
	} catch (error) {
		const errMessage =
			error instanceof Error ? error.message : "Unknown Error Occured (UEO)";

		return { success: false, error: errMessage };
	}
};

export async function handleRequestMumuUser(
	username: string,
	email: string,
	is_business_owner: boolean,
	business_name: string,
): Promise<boolean | null> {
	const mumuWaitListUser: MumuWaitlistUser = {
		username: username.trim() ?? "",
		email: email.trim() ?? "",
		is_business_owner: is_business_owner,
		business_name: business_name.trim() ?? "",
		created_at: new Date(),
		updated_at: new Date(),
	};

	const { success, error } = await insertRecord(
		"mumu_waitlist_user",
		mumuWaitListUser,
	);

	return success;
}
