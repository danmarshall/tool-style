import { style, globalStyle } from '@vanilla-extract/css';

export const footer = style({
  padding: '1rem',
  textAlign: 'center',
  fontSize: '0.875rem',
  '@media': {
    '(max-width: 999px)': {
      padding: '0.25rem',
      fontSize: '0.75rem',
      lineHeight: 1.2,
    }
  }
});

globalStyle(`${footer} a`, {
  color: 'inherit',
});
