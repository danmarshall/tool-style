# @danmarshall/tool-style

Astro layout template for common tools with server-side rendering.

## Installation

```bash
npm install @danmarshall/tool-style astro
```

## Usage

Import the Layout component in your Astro page and provide content via the `content` slot:

### Basic Usage

```astro
---
import Layout from '@danmarshall/tool-style/Layout.astro';
---

<Layout title="My Tool">
  <Fragment slot="content">
    <aside>
      <!-- Your custom sidebar content -->
      <section>
        <h2>Settings</h2>
        <label for="input1">Input 1</label>
        <input type="text" id="input1" />
      </section>
    </aside>

    <main>
      <!-- Your custom main content -->
      <section>
        <h2>Output</h2>
        <p>Your tool output goes here</p>
      </section>
    </main>
  </Fragment>
</Layout>
```

### Advanced Usage (Shared React State)

To share React state, context, or providers between sidebar and main areas, use a React component with the `content` slot:

```astro
---
import Layout from '@danmarshall/tool-style/Layout.astro';
import MyApp from '../components/MyApp';
---

<Layout title="My Tool">
  <MyApp client:load slot="content" />
</Layout>
```

Your React component renders both sidebar and main with shared state:

```tsx
import React, { useState } from 'react';

export default function MyApp() {
  const [sharedValue, setSharedValue] = useState('');

  return (
    <>
      <aside>
        <section>
          <h2>Settings</h2>
          <input 
            type="text" 
            value={sharedValue}
            onChange={(e) => setSharedValue(e.target.value)}
          />
        </section>
      </aside>
      
      <main>
        <section>
          <h2>Output</h2>
          <p>Shared value: {sharedValue}</p>
        </section>
      </main>
    </>
  );
}
```

## Layout Props

The Layout component accepts the following props:

- `title` (required): Page title displayed in the header and browser tab
- `backgroundImage` (optional): URL to a background image for the header
- `backgroundImageStyle` (optional): Object with CSS properties for the background image:
  - `backgroundSize`: CSS background-size value (default: '750px')
  - `backgroundPosition`: CSS background-position value (default: '0px -22px')
  - `opacity`: Opacity value (default: 0.3)

## Slots

The Layout component provides a single `content` slot:

- `content`: Full control over sidebar and main content areas

Your content should render `<aside>` and `<main>` elements directly. This allows you to:
- Share React state/context between sidebar and main
- Use a single component that manages both areas
- Have complete control over the sidebar and main structure

## Features

- **Server-Side Rendering**: Fully rendered on the server for better performance and SEO
- **Client-Side Interactivity**: Small JavaScript for tools menu toggle and theme switching
- **Dark Mode**: Automatic theme toggle with localStorage persistence
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens

## Hardcoded Elements

The following elements are part of the template and cannot be customized:

- **Footer**: "© 2026 Tool Name | Privacy | Terms"
- **Coffee Link**: https://buymeacoffee.com/danmarshall
- **Tools Menu**: "Other Tools" dropdown with Tool 1-4 links
- **Ad Sections**: Right sidebar ad (160x600) and tablet bottom ad (728x90)

## Styling

The template includes pre-built styles. If you need to customize styles, you can:

1. Override CSS variables in your own stylesheet
2. Import the base styles and extend them
3. Use Astro's scoped styles in your page components

## Example

See `/src/pages/index.astro` for a complete example using the `content` slot.

## License

MIT
