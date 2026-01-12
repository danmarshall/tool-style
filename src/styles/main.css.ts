import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const main = style({
  flex: 1,
  overflowY: 'auto',
  '@media': {
    '(max-width: 999px)': {
      width: 'auto',
      height: '50vh',
      order: 1,
    }
  }
});

export const section = style({
  padding: '1rem',
  margin: vars.color.mainMargin,
});

export const sectionFirst = style({
  boxSizing: 'border-box',
  border: `1px solid ${vars.color.borderColor}`,
  boxShadow: vars.color.mainShadow,
});
