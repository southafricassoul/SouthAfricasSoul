from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173/")

        # Click the button for "Region and Traditions"
        page.click('[data-testid="menu-button-🌍 Region and Traditions"]')

        # Click the button for "African Herbal Apothecary"
        page.click('[data-testid="menu-button-🌍 African Herbal Apothecary"]')

        # Click the button for "African Healing Traditions by Region"
        page.click('[data-testid="menu-button-African Healing Traditions by Region"]')

        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()
