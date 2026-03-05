from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get absolute path to index.html
        cwd = os.getcwd()
        file_path = f"file://{cwd}/index.html"

        print(f"Navigating to {file_path}")
        page.goto(file_path)

        # Wait for loading overlay to disappear
        page.wait_for_selector("#loading-overlay", state="hidden", timeout=5000)

        # Check for Play button
        play_btn = page.locator("#btn-play-pause")
        if play_btn.is_visible():
            print("Play button is visible")
        else:
            print("Play button is NOT visible")

        # Take screenshot of Earth View
        page.screenshot(path="verification/earth_view.png")

        # Switch to Galaxy View
        page.click("#btn-mode-galaxy")
        page.wait_for_timeout(1000) # Wait for transition
        page.screenshot(path="verification/galaxy_view.png")

        browser.close()

if __name__ == "__main__":
    run()
