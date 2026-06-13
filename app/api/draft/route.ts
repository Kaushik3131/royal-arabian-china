import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { readToken } from "../../../sanity/env";

/**
 * Route handler to enable or disable Next.js Draft Mode for Sanity live preview.
 *
 * Example enable:  /api/draft?secret=TOKEN&slug=cn
 * Example disable: /api/draft?disable=true&slug=cn
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const disable = searchParams.get("disable");

  // Handle disabling draft mode
  if (disable === "true") {
    const draft = await draftMode();
    draft.disable();
    redirect(slug ? `/${slug}` : "/");
  }

  // Verify the secret token to enable draft mode
  if (!secret || secret !== readToken) {
    return new Response("Invalid secret token", { status: 401 });
  }

  // Enable Draft Mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the previewing document's slug or fallback path
  redirect(slug ? `/${slug}` : "/");
}
