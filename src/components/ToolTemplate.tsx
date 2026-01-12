import React, { useState, useEffect } from 'react';
import { Header, HeaderProps } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Footer } from './Footer';
import * as containerStyles from '../styles/container.css';
import '../styles/theme.css';

export interface ToolTemplateProps {
  headerProps: HeaderProps;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

export const ToolTemplate: React.FC<ToolTemplateProps> = ({
  headerProps,
  sidebar,
  main,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleThemeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <Header
        {...headerProps}
        isDarkMode={isDarkMode}
        onThemeToggle={headerProps.onThemeToggle || handleThemeToggle}
      />
      
      <div className={containerStyles.container}>
        <Sidebar>{sidebar}</Sidebar>
        <Main>{main}</Main>
        
        <aside className={containerStyles.adsRight}>
          <div className={containerStyles.adLabel}>Advertisement</div>
          <div className={containerStyles.adPlaceholderRight}>
            Ad Space
          </div>
        </aside>
      </div>
      
      <div className={containerStyles.tabletBottomAd}>
        <div className={`${containerStyles.adLabel} ${containerStyles.tabletBottomAdLabel}`}>
          Advertisement
        </div>
        <div className={containerStyles.adPlaceholderBottom}>
          Ad Space
        </div>
      </div>
      
      <Footer />
    </>
  );
};
