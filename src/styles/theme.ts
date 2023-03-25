import { css, DefaultTheme } from 'styled-components';

const font = {
  ko: {
    h1: () => {
      return css`
        font-weight: 500;
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -1%;
      `;
    },
    h2: () => {
      return css`
        font-weight: 500;
        font-size: 34px;
        line-height: 44px;
        letter-spacing: -1%;
      `;
    },
    h3: () => {
      return css`
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: -1%;
      `;
    },
    subTitle1: () => {
      return css`
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -2%;
      `;
    },
    subTitle2: () => {
      return css`
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -2%;
      `;
    },
    body1: () => {
      return css`
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -1%;
      `;
    },
    body2: () => {
      return css`
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: -1%;
      `;
    },
    button: () => {
      return css`
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 1%;
      `;
    },
    caption: () => {
      return css`
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -1%;
      `;
    },
  },
  eng: {
    h1: () => {
      return css`
        font-weight: 400;
        font-size: 56px;
        line-height: 62px;
        letter-spacing: 0%;
      `;
    },
    h2: () => {
      return css`
        font-weight: 400;
        font-size: 38px;
        line-height: 47px;
        letter-spacing: 0%;
      `;
    },
    h3: () => {
      return css`
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        letter-spacing: 0%;
      `;
    },
    subTitle1: () => {
      return css`
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0%;
      `;
    },
    subTitle2: () => {
      return css`
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0%;
      `;
    },
    body1: () => {
      return css`
        font-weight: 300;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0%;
      `;
    },
    body2: () => {
      return css`
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0%;
      `;
    },
    button: () => {
      return css`
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        letter-spacing: 0%;
      `;
    },
    caption: () => {
      return css`
        font-weight: 300;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0%;
      `;
    },
  },
};

const breakpoints = {
  mobile1: '375px',
  mobile2: '480px',
  tablet: '768px',
  laptop: '1200px',
  desktop: '1200px',
  large: '1700px',
} as const;

const mediaQuery = (maxWidth: string) => `@media (max-width: ${maxWidth})`;

const media = {
  mobile1: mediaQuery(breakpoints.mobile1),
  mobile2: mediaQuery(breakpoints.mobile2),
  tablet: mediaQuery(breakpoints.tablet),
  laptop: mediaQuery(breakpoints.laptop),
  desktop: mediaQuery(breakpoints.desktop),
} as const;

const theme: DefaultTheme = {
  font,
  media,
};

export default theme;

export type fontThemeType = (typeof font)[keyof typeof font];
