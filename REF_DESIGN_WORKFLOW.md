# GoC-Pages: `ref/` → `design/` Workflow Guide

## Overview

The `ref/` folder contains raw design documents (`.txt` markdown files) describing game systems. Each file in `ref/` has a corresponding HTML page in `design/` that renders the content with consistent site styling and navigation.

---

## Adding a New ref File

1. **Create the file** in `ref/` using plain text or markdown:
   ```
   ref/<short_name>.txt
   ```
   Example: `ref/task_combat.txt`

2. **Write the content** using headers (`#`, `##`, `###`), paragraphs, lists, and code blocks as needed. Keep it focused on a single system or topic.

3. **Commit the file** to the repo so it's tracked.

---

## Creating the Corresponding Design HTML Page

For each `ref/<name>.txt`, create `design/guild_<name>.html`.

### Page Template

Every design page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guild — [Page Title]</title>
  <link rel="stylesheet" href="../assets/theme.css" />
  <link rel="stylesheet" href="../assets/nav.css" />
  <style>
    body { font-family: sans-serif; background: var(--bg); margin: 0; padding: 48px 16px; color: var(--text); line-height: 1.65; }
    .page { max-width: 960px; margin: 0 auto; }
    h1 { font-size: 22px; font-weight: 500; color: var(--text); margin: 0 0 6px 0; }
    h2 { font-size: 18px; font-weight: 500; color: var(--text); margin: 28px 0 6px 0; scroll-margin-top: 24px; }
    h3 { font-size: 15px; font-weight: 500; color: var(--text); margin: 20px 0 8px 0; }
    p { font-size: 13px; color: var(--text); margin: 0 0 10px 0; }
    .subtitle { font-size: 13px; color: var(--muted); margin-bottom: 8px; }
    .meta { font-size: 11px; color: var(--muted); letter-spacing: 0.05em; margin-bottom: 40px; }
    .section { margin-bottom: 48px; }
    .section-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin: 12px 0 20px 0; font-size: 13px; }
    th, td { text-align: left; padding: 6px 10px; border-bottom: 1px solid var(--border); color: var(--text); }
    th { font-weight: 500; background: var(--panel); }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; background: rgba(0,0,0,0.1); padding: 1px 5px; border-radius: 3px; color: var(--text); }
    pre { background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; overflow-x: auto; font-size: 12px; line-height: 1.55; color: var(--text); margin: 12px 0 16px 0; }
    pre code { background: transparent; padding: 0; color: inherit; font-size: inherit; }
    .callout { background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; margin: 16px 0; }
    .callout-purple { border-left: 3px solid #534AB7; border-radius: 0 8px 8px 0; }
    .callout-teal { border-left: 3px solid #0F6E56; border-radius: 0 8px 8px 0; }
    .callout-amber { border-left: 3px solid #854F0B; border-radius: 0 8px 8px 0; }
    .callout-coral { border-left: 3px solid #993C1D; border-radius: 0 8px 8px 0; }
    .callout-label { font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
    .callout-purple .callout-label { color: #534AB7; }
    .callout-teal .callout-label { color: #0F6E56; }
    .callout-amber .callout-label { color: #854F0B; }
    .callout-coral .callout-label { color: #993C1D; }
    ul, ol { font-size: 13px; color: var(--text); margin: 0 0 12px 0; padding-left: 22px; }
    li { margin-bottom: 4px; }
    .divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }
  </style>
</head>
<body>
<div id="content">
<div class="page">

  <h1>[Page Title]</h1>
  <p class="subtitle">[One-line subtitle]</p>
  <p class="meta">DESIGN NOTE · [CATEGORY]</p>

  <!-- Content sections go here -->
  <div class="section">
    <h2>Section Heading</h2>
    <p>Paragraph text.</p>
    <ul>
      <li>Bullet item</li>
      <li>Bullet item</li>
    </ul>
    <pre><code>code block</code></pre>
    <table>
      <thead><tr><th>Column</th><th>Column</th></tr></thead>
      <tbody>
        <tr><td>Data</td><td>Data</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>Another Section</h2>
    <!-- ... -->
  </div>

  <hr class="divider" />

  <div class="section">
    <h2>File Inventory or What Is Not Built Yet</h2>
    <!-- ... -->
  </div>

</div>
</div>
<script src="../assets/nav.js"></script>
</body>
</html>
```

### Key Rules

- **Title format**: `Guild — [Title]` in `<title>` and `<h1>`
- **Subtitle**: brief one-liner describing the page
- **Meta line**: `DESIGN NOTE · [CATEGORY]` (e.g., `REFERENCE · SYSTEM PRIORITIES`)
- **Must include**: `theme.css`, `nav.css`, `nav.js`, `#content` wrapper
- **Max width**: 960px for content area
- **Use semantic headings**: h1 (one per page), h2 for major sections, h3 for subsections
- **Callout classes**: `callout-purple`, `callout-teal`, `callout-amber`, `callout-coral` for highlighted notes
- **Dividers**: `<hr class="divider" />` between major sections

---

## Registering the New Page

### 1. `index.html` — Add a card to the grid

Insert a new `<a class="card">` inside the `<div class="grid">`:

```html
<a class="card" href="./design/guild_<name>.html">
  <div class="card-title">[Display Title]</div>
  <div class="card-sub">[Short description]</div>
</a>
```

### 2. `assets/nav.js` — Add a nav entry

Add an entry to the `pages` array inside the Design section:

```javascript
{ label: '[Display Title]',  href: 'design/guild_<name>.html' },
```

---

## Updating an Existing Design Page

When a `ref/` file is updated:

1. Open the corresponding `design/guild_<name>.html`
2. Rewrite the affected sections to match the updated ref content
3. Do **not** change the page structure (head, styles, nav includes, content wrapper)
4. Keep all heading levels, class names, and styling consistent

---

## Current Mapping

| ref/ file | design/ file |
|-----------|-------------|
| `task_system_priority.txt` | `guild_task_system_priority.html` |
| `task_system.txt` | `guild_task_system.html` |
| `task_noticeboard_system.txt` | `guild_task_noticeboard_system.html` |
| `task_selling.txt` | `guild_task_selling.html` |
| `task_crafting.txt` | `guild_task_crafting.html` |
| `ui_page.txt` (conceptual) | `guild_ui_kit.html` |

---

## Checklist for Each New Page

- [ ] Create `ref/<name>.txt` with source content
- [ ] Create `design/guild_<name>.html` using the template above
- [ ] Add card to `index.html` grid
- [ ] Add entry to `assets/nav.js` Design section
- [ ] Verify `theme.css`, `nav.css`, and `nav.js` are linked
- [ ] Verify `#content` wrapper wraps all page content
- [ ] Verify closing `</div>` for `#content` comes before `<script src>`
- [ ] Test page renders correctly (no duplicate `</body>` tags)