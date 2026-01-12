import React from 'react';
import * as styles from '../styles/footer.css';

export interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
};
