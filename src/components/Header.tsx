import React, { useState } from 'react';
import { Moon, Sun, Coffee } from 'lucide-react';
import * as styles from '../styles/header.css';

export interface HeaderProps {
  title: string;
  logoUrl?: string;
  homeUrl?: string;
  backgroundImage?: string;
  backgroundImageStyle?: {
    backgroundSize?: string;
    backgroundPosition?: string;
    opacity?: number;
  };
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  logoUrl = '/',
  backgroundImage,
  backgroundImageStyle = {
    backgroundSize: '750px',
    backgroundPosition: '0px -22px',
    opacity: 0.3,
  },
  onThemeToggle,
  isDarkMode = false,
}) => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  // Hardcoded tools list
  const toolsMenu = {
    label: "Other Tools",
    items: [
      { label: "Tool 1", url: "/tool1.html" },
      { label: "Tool 2", url: "/tool2.html" },
      { label: "Tool 3", url: "/tool3.html" },
      { label: "Tool 4", url: "/tool4.html" },
    ]
  };

  const handleToolsToggle = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(`.${styles.nav}`)) {
      setIsToolsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isToolsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isToolsOpen]);

  return (
    <header className={styles.header}>
      {backgroundImage && (
        <div
          className={styles.headerBg}
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            ...backgroundImageStyle,
          }}
        />
      )}
      <div className={styles.headerLeft}>
        <a href={logoUrl} className={`${styles.headerLink} ${styles.logo}`} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <nav className={styles.nav}>
        <button
          type="button"
          className={styles.navButton}
          onClick={handleToolsToggle}
        >
          {toolsMenu.label} ▾
        </button>
        <ul className={`${styles.toolsList} ${isToolsOpen ? styles.toolsListOpen : ''}`}>
          {toolsMenu.items.map((item) => (
            <li key={item.url} className={styles.toolsListItem}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
        {onThemeToggle && (
          <button
            type="button"
            className={styles.themeToggle}
            onClick={onThemeToggle}
            title="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        <a
          className={`${styles.headerLink} ${styles.buyCoffee}`}
          href="https://buymeacoffee.com/danmarshall"
          target="_blank"
          rel="noopener noreferrer"
          title="Buy me a coffee"
        >
          <Coffee size={20} />
        </a>
      </nav>
    </header>
  );
};
