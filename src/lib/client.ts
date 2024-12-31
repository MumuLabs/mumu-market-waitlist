"use server";

import { client } from "@/lib/supabase/server";
import { MumuUser, MumuBusinessOwner } from "@/types/user.types";
import { logger } from "@/lib/logging";

// ANCHOR: Helper Function: insertRecord()
const insertRecord = async <T>(tableName: string, data: T) => {
	try {
		const { error } = await client.from(tableName).insert(data);

		if (error) {
			throw new Error(error.message);
		}

		logger.info(
			`Record Inserted in Table ${tableName}: ${JSON.stringify(data)}`,
		);
		return { success: true };
	} catch (error) {
		const errMessage =
			error instanceof Error ? error.message : "Unknown Error Occured (UEO)";
		logger.error(`Error Occured: ${errMessage}`);

		return { success: false, error: errMessage };
	}
};

export async function handleRequestMumuUser(
	e: React.FormEvent<HTMLFormElement>,
): Promise<boolean | void> {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);

	const mumuUser: MumuUser = {
		id: +String(formData.get("id")).trim(),
		username: String(formData.get("username")).trim(),
		email: String(formData.get("email")).trim(),
		created_at: new Date(),
		updated_at: new Date(),
	};

	const { success, error } = await insertRecord<MumuUser>(
		"mumu_users",
		mumuUser,
	);

	if (!success) {
		alert(error);
	}

	return;
}

export async function handleRequestMumuBusinessUser(
	e: React.FormEvent<HTMLFormElement>,
): Promise<boolean | void> {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);

	const MumuBusinessOwner: MumuBusinessOwner = {
		id: +String(formData.get("id")).trim(),
		mbo_id: String(formData.get("mboId")).trim(),
		username: String(formData.get("username")).trim(),
		email: String(formData.get("email")).trim(),
		business_name: String(formData.get("businessName")).trim(),
		created_at: new Date(),
		updated_at: new Date(),
	};

	const { success, error } = await insertRecord<MumuBusinessOwner>(
		"mumu_mb_users",
		MumuBusinessOwner,
	);

	if (!success) {
		alert(error);
	}

	return;
}
