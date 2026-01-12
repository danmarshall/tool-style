# @danmarshall/tool-style

React component library with vanilla-extract CSS modules for creating tool-style applications.

## Installation

```bash
npm install @danmarshall/tool-style react react-dom
```

## Usage

The library provides a complete template component along with individual components for building tool-style applications.

### Basic Example

```tsx
import React from 'react';
import { ToolTemplate } from '@danmarshall/tool-style';

function App() {
  return (
    <ToolTemplate
      headerProps={{
        title: "My Tool",
      }}
      sidebar={
        <div>
          <h2>Settings</h2>
          <label>Input 1</label>
          <input type="text" />
        </div>
      }
      main={
        <div>
          <h2>Output</h2>
          <p>Your tool output goes here</p>
        </div>
      }
    />
  );
}
```

## Components

### ToolTemplate

The main and only exported component that provides the complete tool layout.

**Props:**
- `headerProps`: Configuration for the header
  - `title`: Page title (required)
  - `logoUrl`: URL for logo link (default: '/')
  - `backgroundImage`: Optional background image URL
  - `backgroundImageStyle`: Optional styling for background image
  - `onThemeToggle`: Optional custom theme toggle handler
  - `isDarkMode`: Theme state
- `sidebar`: React node for sidebar content
- `main`: React node for main content

**Hardcoded elements** (cannot be customized):
- Footer content: "© 2026 Tool Name | Privacy | Terms"
- Coffee donation URL: https://buymeacoffee.com/danmarshall
- Tools menu: "Other Tools" dropdown with Tool 1-4 links
- Ad sections: Right sidebar ad (160x600) and tablet bottom ad (728x90)

Note: Individual components (Header, Sidebar, Main, Footer) are not exported and cannot be used separately.

## Styling

The library uses vanilla-extract for CSS modules. You can import and use the style modules directly:

```tsx
import { headerStyles, sidebarStyles, mainStyles, footerStyles, containerStyles, vars } from '@danmarshall/tool-style';
```

## Theme Variables

Access theme variables through `vars`:

```tsx
import { vars } from '@danmarshall/tool-style';

// vars.color.bgColor
// vars.color.textColor
// vars.color.borderColor
// etc.
```

## Dark Mode

Dark mode is automatically handled by the ToolTemplate component. It saves the theme preference to localStorage and applies the `dark-mode` class to the body element.

## License

MIT
