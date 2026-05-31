from playwright.sync_api import sync_playwright, expect
import re

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # 1. Open the menu
        page.get_by_label("Open menu").click()
        sidebar = page.locator("div.bg-white.z-50")
        expect(sidebar).to_be_visible()

        # 2. Navigate into a submenu
        page.get_by_role("button", name="Region and Traditions").click()
        expect(page.get_by_role("button", name="Global Apothecary")).to_be_visible()

        # Take a screenshot of the submenu
        page.screenshot(path="jules-scratch/verification/submenu.png")

        # 3. Use the browser's back button to close the menu
        page.go_back()
        # Wait for the closing animation class to be applied
        expect(sidebar).to_have_class(re.compile(r"-translate-x-full"))

        # 4. Take a screenshot to confirm the menu is closed
        page.screenshot(path="jules-scratch/verification/menu_closed.png")

        # 5. Reopen the menu
        page.get_by_label("Open menu").click()
        expect(sidebar).not_to_have_class(re.compile(r"-translate-x-full"))

        # 6. Take another screenshot to confirm the menu has reset
        page.screenshot(path="jules-scratch/verification/menu_reset.png")

        browser.close()

run()
