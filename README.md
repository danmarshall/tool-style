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

### Using Individual Components

```tsx
import React from 'react';
import {
  Header,
  Sidebar,
  Main,
  Footer,
} from '@danmarshall/tool-style';

function MyCustomLayout() {
  return (
    <>
      <Header title="My Custom Tool" />
      
      <div style={{ display: 'flex' }}>
        <Sidebar>
          <section>
            <h2>Settings</h2>
            <label>Input 1</label>
            <input type="text" />
          </section>
        </Sidebar>
        
        <Main>
          <section>
            <h2>Output</h2>
            <p>Content goes here</p>
          </section>
        </Main>
      </div>
      
      <Footer>
        &copy; 2026 My Tool | <a href="/privacy">Privacy</a>
      </Footer>
    </>
  );
}
```

## Components

### ToolTemplate

Main component that includes header, sidebar, main content area, footer, and optional ad sections.

**Props:**
- `headerProps`: Configuration for the header (see Header component)
- `sidebar`: React node for sidebar content
- `main`: React node for main content
- `adsRight`: Optional React node for right sidebar ads (visible on large screens)
- `tabletBottomAd`: Optional React node for bottom ads (visible on tablets)

Note: The footer is hardcoded and cannot be customized.

### Header

Page header with logo, title, tools menu, theme toggle, and coffee button.

**Props:**
- `title`: Page title (required)
- `logoUrl`: URL for logo link (default: '/')
- `backgroundImage`: Optional background image URL
- `backgroundImageStyle`: Optional styling for background image
- `onThemeToggle`: Optional custom theme toggle handler
- `isDarkMode`: Theme state

Note: The "Buy me a coffee" link and "Other Tools" menu are hardcoded and cannot be customized.

### Sidebar

Container for sidebar content with proper styling.

**Props:**
- `children`: Sidebar content

### Main

Container for main content area.

**Props:**
- `children`: Main content

### Footer

Footer component with centered text.

**Props:**
- `children`: Footer content

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
