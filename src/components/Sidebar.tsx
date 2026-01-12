import React from 'react';
import * as styles from '../styles/sidebar.css';

export interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className={styles.aside}>
      {children}
    </aside>
  );
};
