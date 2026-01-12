# Installing from GitHub

This package is available on GitHub and can be installed directly without publishing to npm.

## Installation

The easiest way with least friction is to install directly from GitHub using npm:

```bash
npm install danmarshall/tool-style
```

This will install the latest version from the main branch. You can also specify a specific branch, tag, or commit:

```bash
# Install from a specific branch
npm install danmarshall/tool-style#your-branch-name

# Install from a specific tag/release
npm install danmarshall/tool-style#v1.0.0

# Install from a specific commit
npm install danmarshall/tool-style#abc1234
```

## Usage in Your Astro Project

Once installed, import and use the Layout component:

```astro
---
import Layout from '@danmarshall/tool-style/src/Layout.astro';
---

<Layout title="My Tool">
  <div slot="sidebar">
    <section>
      <h2>Settings</h2>
      <label for="input1">Input 1</label>
      <input type="text" id="input1" />
    </section>
  </div>

  <div slot="main">
    <section>
      <h2>Output</h2>
      <p>Your tool output goes here</p>
    </section>
  </div>
</Layout>
```

## Updating

To update to the latest version:

```bash
npm update @danmarshall/tool-style
```

Or reinstall:

```bash
npm uninstall @danmarshall/tool-style
npm install danmarshall/tool-style
```

## Why This Approach?

- ✅ **No friction**: Works exactly like npm packages
- ✅ **Simple**: Single command to install
- ✅ **Versioning**: Can pin to specific tags/commits
- ✅ **Updates**: Easy to update with standard npm commands
- ✅ **No submodules**: Avoids git submodule complexity
- ✅ **Private repos**: Works with private repos too (with proper GitHub auth)

## Alternative: package.json dependency

You can also add it directly to your `package.json`:

```json
{
  "dependencies": {
    "@danmarshall/tool-style": "github:danmarshall/tool-style#main"
  }
}
```

Then just run `npm install`.
