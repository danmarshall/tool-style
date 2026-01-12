import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    mainMargin: '1.5rem',
    mainShadow: '0 2px 8px rgba(0,0,0,0.1)',
    bgColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#ccc',
    buttonBg: 'rgba(0,0,0,0.03)',
    buttonHover: '#e8e8e8',
    navBg: 'white',
    footerBg: 'transparent',
  }
});

globalStyle('body', {
  fontFamily: "'Open Sans', sans-serif",
  lineHeight: 1.5,
  margin: 0,
  fontSize: '14px',
  backgroundColor: vars.color.bgColor,
  color: vars.color.textColor,
});

globalStyle('body.dark-mode', {
  vars: {
    [vars.color.bgColor]: '#1e1e1e',
    [vars.color.textColor]: '#e0e0e0',
    [vars.color.borderColor]: '#444',
    [vars.color.buttonBg]: 'rgba(255,255,255,0.05)',
    [vars.color.buttonHover]: '#333',
    [vars.color.navBg]: '#2d2d2d',
    [vars.color.mainShadow]: '0 2px 8px rgba(0,0,0,0.3)',
  }
});
