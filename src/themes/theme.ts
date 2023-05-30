const MazeDefaultTheme = {
  colors: {
    background: '#E5E5E5',
    background_050: '#F5F7FF',

    primary: '#2E379E',
    primary_050: '#EBECF9',
    primary_100: '#C4C7EE',
    primary_200: '#9CA2E2',
    primary_300: '#757DD7',
    primary_500: '#2E379E',
    primary_600: '#222977',

    black: '#000000',
    gray_800_opacity: '#22222901',
    gray_050: '#F7F7F8',
    gray_100: '#D7D7DB',
    gray_200: '#B7B7BE',
    gray_300: '#9696A1',
    gray_400: '#767684',
    gray_500: '#565667',
    gray_600: '#454552',
    gray_700: '#34343E',
    gray_800: '#222229',

    green_050: '#F2FFFC',
    green_100: '#C2F5EA',
    green_200: '#91EBD9',
    green_300: '#61E2C7',
    green_500: '#00CEA4',
    green_700: '#007C62',

    orange_050: '#FFF5EB',
    orange_100: '#FFE1C5',
    orange_200: '#FFCE9F',
    orange_300: '#FFBA7A',
    orange_500: '#FF932E',
    orange_700: '#BD6819',

    red_050: '#FFF6F7',
    red_100: '#FFD6D9',
    red_200: '#FFB7BB',
    red_300: '#FF979C',
    red_500: '#FF5860',
    red_700: '#C20F17',

    white: '#FFFFFF',
  },
  fonts: {
    inter: {
      regular: 'Inter-Regular',
      semibold: 'Inter-Medium',
      bold: 'Inter-Bold',
    },
  },
};

export interface MazeDefaultThemeType {
  colors: typeof MazeDefaultTheme.colors;
  fonts: typeof MazeDefaultTheme.fonts;
}

export default MazeDefaultTheme;
