export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-13";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "main"
    ? "production"
    : "production", // fallback if build time
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === "") {
    // During local development next-env generates types, let's warn rather than crash if build-time static gen
    if (process.env.NODE_ENV === "production" && !process.env.NEXT_PHASE) {
      throw new Error(errorMessage);
    }
    return (v || "") as T;
  }

  return v;
}
