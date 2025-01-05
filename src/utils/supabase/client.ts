import { createBrowserClient } from "@supabase/ssr";
import { checkEnvVars } from "./check-env-vars";

export const createClient = () => {
    if (checkEnvVars) {
        const createClient = createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        return createClient;

    } else {
        throw new Error(`Invalid Supabase Environment Variables, Got: ${checkEnvVars}`);

    }
};