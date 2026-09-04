import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const supabase = createClient(
        process.env["SUPABASE_URL"]!,
        process.env["SUPABASE_PUBLISHABLE_KEY"]!,
        { auth: { persistSession: false, autoRefreshToken: false, storage: undefined } },
      );
      const { error } = await supabase.from("contact_messages").insert({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (error) throw new Error(`db: ${error.message}`);
      return { ok: true };
    } catch (e) {
      console.error("contact form error:", e);
      throw new Error(`send failed: ${e instanceof Error ? e.message : String(e)}`);
    }
  });
