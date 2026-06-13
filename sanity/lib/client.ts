import { draftMode } from "next/headers";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, readToken } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

/**
 * Returns a Sanity client configured for the current request context.
 * In Draft Mode, returns a client with preview perspective and read token.
 */
export async function getClient() {
  const isDraftMode = (await draftMode()).isEnabled;
  if (isDraftMode) {
    if (!readToken) {
      console.warn(
        "Draft mode is enabled but SANITY_API_READ_TOKEN is missing",
      );
      return client;
    }
    return client.withConfig({
      token: readToken,
      useCdn: false,
      perspective: "previewDrafts",
    });
  }
  return client;
}
