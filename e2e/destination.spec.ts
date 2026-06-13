import { expect, test } from "@playwright/test";

test.describe("Destination Page (/cn)", () => {
  test("should render the destination page with CMS content and no console errors", async ({
    page,
  }) => {
    // Array to capture console error messages
    const consoleErrors: string[] = [];

    // Capture uncaught page errors
    page.on("pageerror", (exception) => {
      consoleErrors.push(`Page Error: ${exception.message}`);
    });

    // Capture console errors
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        // Exclude minor React development warnings and resource load issues like favicon.ico
        const text = msg.text();
        if (
          !text.includes("Download the React DevTools") &&
          !text.includes("framer-motion") &&
          !text.includes("Failed to load resource")
        ) {
          consoleErrors.push(`Console Error: ${text}`);
        }
      }
    });

    // Navigate to the destination page
    await page.goto("/cn");

    // 1. Assert H1 contains "China" (from Sanity CMS)
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("China");

    // 2. Assert at least 3 package cards are visible
    // The packages grid has id="packages" and contains the cards
    const packageCards = page.locator("#packages .grid > div");
    const count = await packageCards.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // 3. Assert each package card has a price and duration
    for (let i = 0; i < count; i++) {
      const card = packageCards.nth(i);

      // Duration badge contains clock and duration text (e.g. "8 Days / 7 Nights")
      const durationText = card.locator("span", { hasText: "Days" });
      await expect(durationText.first()).toBeVisible();

      // Price contains AED and the starting price
      const priceText = card.locator("span", { hasText: "AED" });
      await expect(priceText.first()).toBeVisible();
    }

    // 4. Assert page has no console errors
    expect(consoleErrors).toEqual([]);
  });
});
