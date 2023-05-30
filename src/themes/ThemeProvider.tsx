import React, { useMemo } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import MazefaultTheme from './theme';
import { SPACING_KEYS } from './types';

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const theme = useMemo(() => {
    return {
      ...MazefaultTheme,
      spacing: {
        micro: '4px' as (typeof SPACING_KEYS)['micro'],
        tiny: '8px' as (typeof SPACING_KEYS)['tiny'],
        small: '16px' as (typeof SPACING_KEYS)['small'],
        standard: '24px' as (typeof SPACING_KEYS)['standard'],
        mid: '32px' as (typeof SPACING_KEYS)['mid'],
        large: '48px' as (typeof SPACING_KEYS)['large'],
        huge: '64px' as (typeof SPACING_KEYS)['huge'],
      },
    };
  }, []);

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
