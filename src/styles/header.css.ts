import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const header = style({
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  minHeight: '4rem',
});

export const headerBg = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  pointerEvents: 'none',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const headerLink = style({
  textDecoration: 'none',
});

export const logo = style({});

globalStyle(`${logo}::before`, {
  content: "url('/dans_tools.svg')",
  display: 'block',
  height: '40px',
});

export const title = style({
  fontFamily: "'Sofia Sans', sans-serif",
  fontWeight: 700,
  margin: '0 1rem 0 0',
});

export const nav = style({
  position: 'relative',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});

export const navButton = style({
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontFamily: 'inherit',
});

export const themeToggle = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  ':hover': {
    opacity: 0.7,
  }
});

export const buyCoffee = style({
  color: 'inherit',
});

export const toolsList = style({
  position: 'absolute',
  right: 0,
  top: '100%',
  background: vars.color.navBg,
  border: `1px solid ${vars.color.borderColor}`,
  listStyle: 'none',
  minWidth: '150px',
  display: 'none',
  margin: 0,
  padding: 0,
});

export const toolsListOpen = style({
  display: 'block',
});

export const toolsListItem = style({});

globalStyle(`${toolsListItem} a`, {
  display: 'block',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: "'Open Sans', sans-serif",
});

globalStyle(`${toolsListItem} a:hover`, {
  background: vars.color.buttonHover,
});
