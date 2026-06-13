import { expect, test } from "@playwright/test";

test.describe("Enquiry Form Submission", () => {
  test("should pre-fill package name and submit successfully to Supabase", async ({
    page,
  }) => {
    // Navigate to the destination page
    await page.goto("/cn");

    // Wait for the packages section to render
    const packageCards = page.locator("#packages .grid > div");
    await expect(packageCards.first()).toBeVisible();

    // Get the name of the first package to check the pre-filling feature
    const firstPackageName = await packageCards
      .first()
      .locator("h3")
      .innerText();
    expect(firstPackageName).toBeTruthy();

    // Click "Enquire Now" on the first package card
    const enquireBtn = packageCards
      .first()
      .getByRole("button", { name: "Enquire Now" });
    await expect(enquireBtn).toBeVisible();
    await enquireBtn.click();

    // The page should scroll and focus on the enquiry form container
    const formContainer = page.locator("div#enquire-now");
    await expect(formContainer).toBeVisible();

    // Assert the package selection dropdown is automatically pre-filled with the package name
    const packageSelect = page.locator("select#package_name");
    await expect(packageSelect).toHaveValue(firstPackageName);

    // Generate a unique identifier for the test run to isolate submissions
    const testId = `pw-${Date.now().toString().slice(-6)}`;

    // Fill out the rest of the form fields
    await page.locator("input#name").fill(`Playwright E2E Test ${testId}`);
    await page.locator("input#email").fill(`playwright-${testId}@test.com`);
    await page.locator("input#phone").fill("+971 50 000 0000");
    await page
      .locator("textarea#message")
      .fill(
        `This is an automated E2E test enquiry submission for ${firstPackageName}. Identifier: ${testId}`,
      );

    // Submit the form
    const submitBtn = page.getByRole("button", { name: "Send Enquiry" });
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Assert that the success state displays "Enquiry Submitted!"
    const successHeading = page.locator("h3:has-text('Enquiry Submitted!')");
    await expect(successHeading).toBeVisible({ timeout: 10000 }); // Give up to 10s for Supabase server round-trip

    const successMessage = page.locator(
      "p:has-text('Thank you for reaching out to Royal Arabian')",
    );
    await expect(successMessage).toBeVisible();
  });
});
