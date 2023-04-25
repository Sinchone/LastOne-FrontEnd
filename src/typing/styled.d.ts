import 'styled-components';
import { fontThemeType } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      ko: fontThemeType;
      eng: fontThemeType;
    };
    media: {
      readonly mobile1: string;
      readonly mobile2: string;
      readonly tablet: string;
      readonly laptop: string;
      readonly desktop: string;
    };
  }
}
