# Leads Tracker Extension

A sleek and efficient Chrome Extension designed to help you track and manage your leads effortlessly. Save important URLs manually or grab the current tab's link with a single click.

## 🚀 Features

- **Manual Lead Entry**: Type or paste any link directly into the input field.
- **One-Click Tab Save**: Instantly save the URL of your currently active tab.
- **Persistent Storage**: All your leads are saved in local storage, so they persist even after closing the browser.
- **Quick Links**: Every saved lead is rendered as a clickable link that opens in a new tab.
- **Mass Delete**: Clear your list quickly with a double-click on the "Delete All" button.

## 🛠️ Installation

Since this is a developer extension, you can install it manually in Chrome:

1. **Download/Clone** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on **Load unpacked**.
5. Select the folder containing the extension files (where `manifest.json` is located).
6. The Leads Tracker icon should now appear in your extensions list!

## 📖 How to Use

1. **Save a Link**: Type the URL in the input box and click **SAVE INPUT**.
2. **Save Current Tab**: Click **SAVE TAB** to automatically store the URL of the page you are currently viewing.
3. **Open a Lead**: Click on any link in the list to open it in a new window.
4. **Clear All**: Double-click the red **DELETE ALL** button to remove all saved leads from your list.

## 💻 Tech Stack

- **HTML5**: Structure and semantics.
- **CSS3**: Modern, clean styling with a green-and-red color palette.
- **JavaScript (ES6)**: Logic, event handling, and Chrome API integration.
- **Chrome Extensions API**: Specifically using `chrome.tabs` to interact with browser tabs.

## 📂 Project Structure

```text
├── index.html      # Popup UI
├── index.js        # Extension logic
├── styles.css      # Styling for the popup
├── manifest.json   # Chrome extension configuration
└── icon.png        # Extension icon
```

---

*Happy lead hunting!*
