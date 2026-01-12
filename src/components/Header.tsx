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
  toolsMenu?: {
    label: string;
    items: Array<{ label: string; url: string }>;
  };
  buyCoffeeUrl?: string;
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
  toolsMenu,
  buyCoffeeUrl = 'https://buymeacoffee.com/danmarshall',
  onThemeToggle,
  isDarkMode = false,
}) => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

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
        {toolsMenu && (
          <>
            <button
              type="button"
              className={styles.navButton}
              onClick={handleToolsToggle}
            >
              {toolsMenu.label} ▾
            </button>
            <ul className={`${styles.toolsList} ${isToolsOpen ? styles.toolsListOpen : ''}`}>
              {toolsMenu.items.map((item, index) => (
                <li key={index} className={styles.toolsListItem}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </>
        )}
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
        {buyCoffeeUrl && (
          <a
            className={`${styles.headerLink} ${styles.buyCoffee}`}
            href={buyCoffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Buy me a coffee"
          >
            <Coffee size={20} />
          </a>
        )}
      </nav>
    </header>
  );
};
