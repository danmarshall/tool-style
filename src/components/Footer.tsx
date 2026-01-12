import React from 'react';
import * as styles from '../styles/footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      &copy; 2026 Tool Name | <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
    </footer>
  );
};
