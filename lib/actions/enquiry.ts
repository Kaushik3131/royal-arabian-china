"use server";

import { supabase } from "@/lib/supabase";
import { type EnquiryInput, enquirySchema } from "@/lib/validation/enquiry";

export async function submitEnquiry(input: EnquiryInput) {
  // 1. Validate input using Zod schema on the server
  const result = enquirySchema.safeParse(input);

  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");
    return {
      success: false,
      error: `Validation failed: ${errorMessages}`,
    };
  }

  const validatedData = result.data;

  try {
    // 2. Insert validated record into Supabase
    const { error } = await supabase.from("enquiries").insert([
      {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        package_name: validatedData.package_name,
        message: validatedData.message || null,
      },
    ]);

    if (error) {
      console.error("Supabase insertion error details:", error);
      return {
        success: false,
        error: "Failed to save the enquiry. Please try again later.",
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    console.error("Unexpected error during enquiry submission:", err);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
