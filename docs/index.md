---
layout: home
title: Secure Browse

hero:
  name: Secure Browse
  text: Extension Manager for Financial Sites
  image:
    src: /disable.png
    alt: Secure Browse
  actions:
    - theme: brand
      text: Install Extension
      link: https://chromewebstore.google.com/detail/klfaejodhhokdkdnbgkjeoahnaoihjfk
    - theme: alt
      text: Star on GitHub
      link: https://github.com/rxliuli/secure-browse
---

## Overview

**Secure Browse** is a Chrome extension designed to enhance your online security by managing other extensions based on the websites you visit. This extension automatically disables non-whitelisted extensions when you visit financial websites, ensuring a safer browsing experience. When you navigate away from these sites, it re-enables the previously disabled extensions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c5xZBC26Ry0?si=uXyWyDevzoGeDmz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Features

- **Automatic Extension Management**: Automatically disables potentially unsafe extensions when visiting financial sites.
- **Custom Whitelist**: Maintain a whitelist of trusted extensions that remain active on financial websites.
- **Seamless Browsing**: Extensions are re-enabled when you navigate away from financial sites.
- **User-Friendly**: No manual intervention required; the extension works silently in the background.

## Current Whitelist

The following extensions are included in the default whitelist and will remain enabled when you visit financial websites:

- **uBlock Origin: cjpalhdlnbpafiamejdnhcphjbkeiagm**

## Supported Financial Websites

The extension currently monitors and protects your browsing on the following financial websites:

- `*.binance.com`
- `*.coinbase.com`
- `*.kraken.com`

## Installation

1. **Download the Extension**: Clone or download the extension from the repository.
2. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable Developer mode by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the extension directory.

## Contributing

We welcome contributions from the community! If you have suggestions for new features or improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/rxliuli/secure-browse/blob/main/LICENSE) file for details.

## Support

If you encounter any issues or have any questions, please open an issue in the GitHub repository.

## Screenshots

![Screenshot 1](/enable.png)
![Screenshot 2](/disable.png)

## FAQ

### Why is Firefox not supported?

Secure Browse currently supports only the Chrome browser because the extension relies on specific Chrome APIs to manage and control other extensions. These APIs are not available in Firefox, making it impossible to achieve the same functionality. We are keeping an eye on the development of Firefox APIs and will consider supporting Firefox when feasible.

Key APIs that are either nonexistent or unavailable in Firefox:

- `browser.management.setEnabled`: It is not possible to disable regular extensions; only the enable/disable state of theme extensions can be modified. Reference: [Bug 1282982](https://bugzilla.mozilla.org/show_bug.cgi?id=1282982)
- `chrome.management.uninstall`: This API, which allows uninstalling malicious extensions from a blacklist, does not exist in Firefox. Reference: [management.uninstall() - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstall)

## Contact

For any inquiries, please contact us at [rxliuli@gmail.com](mailto:rxliuli@gmail.com).

---

By using **Secure Browse**, you can ensure a safer and more secure browsing experience on financial websites. Download and install today to take control of your Chrome extensions!
