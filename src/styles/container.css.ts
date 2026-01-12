import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 999px)': {
      flexDirection: 'column',
      width: '100%',
      height: 'calc(100vh - 4rem)',
    }
  }
});

export const adsRight = style({
  width: '180px',
  padding: '1rem 0',
  marginRight: '1rem',
  display: 'none',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  '@media': {
    '(min-width: 1280px)': {
      display: 'block',
    }
  }
});

export const adLabel = style({
  fontSize: '0.7rem',
  color: '#999',
  marginBottom: '8px',
});

export const tabletBottomAd = style({
  display: 'none',
  '@media': {
    '(min-width: 1000px) and (max-width: 1279px)': {
      display: 'block',
      margin: 0,
      padding: '12px',
    }
  }
});

export const tabletBottomAdLabel = style({
  textAlign: 'center',
});
