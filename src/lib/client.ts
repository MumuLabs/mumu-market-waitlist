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

		if (error) {
			throw new Error(error.message);
		}

		return { success: true, data: data![0] };
	} catch (error) {
		const errMessage =
			error instanceof Error ? error.message : "Unknown Error Occured (UEO)";

		return { success: false, error: errMessage };
	}
};

export async function handleRequestMumuUser(
	e: React.FormEvent<HTMLFormElement>,
): Promise<boolean | void> {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);

	const mumuWaitListUser: MumuWaitlistUser = {
		username: String(formData.get("username")).trim(),
		email: String(formData.get("email")).trim(),
		is_business_owner: Boolean(formData.get("is_business_owner")),
		business_name: String(formData.get("business_name")).trim(),
		created_at: new Date(),
		updated_at: new Date(),
	};

	const { success, error } = await insertRecord(
		"mumu_waitlist_user",
		mumuWaitListUser,
	);

	if (!success) {
		alert(error);
	}

	return;
}
