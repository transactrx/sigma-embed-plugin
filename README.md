# Sigma Embed Preview Plugin

A custom Sigma plugin that displays an embedded report preview inside a Sigma workbook. Used in the report catalog/portal workbook to let users preview reports without leaving the page.

## How It Works

The plugin renders an iframe that loads a Sigma embed URL. It receives the URL from a Sigma workbook control (`Selected Link`) and updates the iframe dynamically when the user clicks a different report's preview button.

## GitHub Pages URL

```
https://transactrx.github.io/sigma-embed-plugin/
```

This URL is registered as the **Production URL** in Sigma Admin → Plugins.

## Setup in Sigma

1. **Register the plugin:** Sigma Admin → Plugins → Register New → paste the GitHub Pages URL as the Production URL
2. **Add to workbook:** In the portal workbook, add a Plugin element and select this plugin
3. **Wire the control:** In the plugin element's data config, add a column pointing to the `Selected Link` control
4. **Preview button action:** Each report row's preview button should set the `Selected Link` control to that report's embed URL

## Files

- `index.html` — The plugin source. Uses the [Sigma Plugin SDK](https://cdn.sigmacomputing.com/embed-sdk/v0/sigma-plugin.js) to receive data from the workbook and render the iframe.

## Updating

Any changes pushed to `main` are automatically deployed via GitHub Pages within a few minutes.
