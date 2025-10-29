from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    # iPhone 11 Pro viewport
    context = browser.new_context(viewport={'width': 375, 'height': 812})
    page = context.new_page()
    page.goto("http://localhost:5173")
    page.wait_for_load_state('networkidle')

    # Open mobile menu
    page.click('button[aria-label="Open main menu"]')
    page.wait_for_selector('div[class*="translate-x-0"]')
    page.screenshot(path="jules-scratch/verification/01-mobile-menu-open.png")

    # Click on "Shop (Marketplace)"
    page.click('button:has-text("Shop (Marketplace)")')
    page.wait_for_selector('h2:has-text("Shop (Marketplace)")')
    page.screenshot(path="jules-scratch/verification/02-shop-submenu.png")

    # Go back to main menu
    page.click('button[aria-label="Go back"]')
    page.wait_for_selector('h2:has-text("Menu")')
    page.screenshot(path="jules-scratch/verification/03-back-to-main-menu.png")

    # Click on "About"
    page.click('button:has-text("About")')
    page.wait_for_selector('h2:has-text("About")')
    page.screenshot(path="jules-scratch/verification/04-about-submenu.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
