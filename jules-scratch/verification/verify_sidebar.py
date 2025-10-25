from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    try:
        page.goto("http://localhost:5173")

        # 1. Wait for the main heading within the header (banner role) to be visible.
        header = page.get_by_role("banner")
        expect(header.get_by_role("heading", name="SouthAfrica's Soul")).to_be_visible()

        # 2. Click the menu button to open the sidebar.
        menu_button = page.get_by_role("button", name="Open menu")
        menu_button.click()

        # 3. Wait for the sidebar overlay to appear.
        sidebar_overlay = page.locator("div.bg-black\\/50")
        expect(sidebar_overlay).to_be_visible()

        # 4. Take a screenshot of the open sidebar.
        page.screenshot(path="jules-scratch/verification/verification.png")
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
