import 'styled-components';
import { fontThemeType } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      ko: fontThemeType;
      eng: fontThemeType;
    };
  }
}
