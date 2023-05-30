import { MazeDefaultThemeType } from './theme';

type SpacingsType = 'micro' | 'tiny' | 'small' | 'standard' | 'mid' | 'large' | 'huge';

export const SPACING_KEYS = {
  micro: '4px',
  tiny: '8px',
  small: '16px',
  standard: '24px',
  mid: '32px',
  large: '48px',
  huge: '64px',
} as const;

export interface ResponsiveThemeInterface extends MazeDefaultThemeType {
  /**
   * @readonly
   * keys for dealing with spaces at Maze design system
   * E.G: margins, paddings, gaps.
   **/
  spacing: { [key in SpacingsType]: (typeof SPACING_KEYS)[key] };
}
