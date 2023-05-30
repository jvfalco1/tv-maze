import 'styled-components';
import type { ResponsiveThemeInterface } from './types';

import type { MazeDefaultThemeType } from '@themes/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ResponsiveThemeInterface {}
}
