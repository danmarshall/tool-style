import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as styles from '../styles/sidebar.css';

export interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = `accordion-content-${title.replace(/\s+/g, '-')}`;
  const triggerId = `accordion-trigger-${title.replace(/\s+/g, '-')}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.accordionSection}>
      <h2 className={styles.accordionHeader}>
        <button
          type="button"
          className={styles.accordionButton}
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={triggerId}
          onClick={handleToggle}
        >
          <span>{title}</span>
          <ChevronDown
            className={styles.accordionIcon}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            aria-hidden="true"
          />
        </button>
      </h2>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
      >
        {children}
      </div>
    </section>
  );
};

export interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {children}
    </section>
  );
};

export interface TabsProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.tabs} role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
          role="tab"
          aria-selected={activeTab === index}
          onClick={() => onTabChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export interface ButtonGroupProps {
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className={styles.buttonGroup}>{children}</div>;
};
