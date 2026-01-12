import React from 'react';
import * as styles from '../styles/main.css';

export interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};
