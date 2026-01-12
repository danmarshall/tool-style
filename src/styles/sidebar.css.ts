import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const aside = style({
  width: '300px',
  padding: '1rem',
  paddingBottom: '1.5rem',
  overflowY: 'auto',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 999px)': {
      width: '100%',
      height: '50vh',
      borderTop: `1px solid ${vars.color.borderColor}`,
      backgroundColor: vars.color.buttonBg,
      order: 2,
    }
  }
});

export const section = style({
  marginBottom: '1.5rem',
});

export const sectionTitle = style({
  fontSize: '1rem',
  marginBottom: '0.5rem',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontWeight: 600,
});

export const label = style({
  display: 'block',
  marginBottom: '0.25rem',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

export const input = style({
  width: '100%',
  marginBottom: '0.75rem',
  padding: '0.5rem',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
});

export const button = style({
  width: '100%',
  padding: '0.5rem',
  fontFamily: 'inherit',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '0.25rem',
  marginBottom: '0.75rem',
});

export const buttonGroupButton = style({
  flex: 1,
  width: 'auto',
  padding: '0.5rem',
});

export const tabs = style({
  display: 'flex',
  gap: 0,
  marginBottom: '0.75rem',
});

export const tab = style({
  flex: 1,
  width: 'auto',
  padding: '0.5rem',
  border: `1px solid ${vars.color.borderColor}`,
  background: vars.color.buttonBg,
  color: 'inherit',
  cursor: 'pointer',
});

globalStyle(`${tab}:first-child`, {
  borderRadius: '4px 0 0 4px',
});

globalStyle(`${tab}:last-child`, {
  borderRadius: '0 4px 4px 0',
});

globalStyle(`${tab}:not(:first-child)`, {
  borderLeft: 'none',
});

globalStyle(`${tab}:hover:not(.active)`, {
  background: vars.color.buttonHover,
});

export const tabActive = style({
  background: 'transparent',
  fontWeight: 600,
  borderBottomColor: 'transparent',
  position: 'relative',
  zIndex: 1,
});

export const accordionSection = style({
  marginBottom: '1.5rem',
});

export const accordionHeader = style({
  marginBottom: '0.5rem',
});

export const accordionButton = style({
  color: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: 0,
  background: 'none',
  border: 'none',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  userSelect: 'none',
  textAlign: 'left',
  ':hover': {
    opacity: 0.7,
  },
  ':focus-visible': {
    outline: '2px solid #0066cc',
    outlineOffset: '2px',
  }
});

export const accordionIcon = style({
  width: '16px',
  height: '16px',
  transition: 'transform 0.2s ease',
  flexShrink: 0,
});

export const accordionContent = style({
  display: 'none',
  overflow: 'hidden',
});

export const accordionContentOpen = style({
  display: 'block',
});
