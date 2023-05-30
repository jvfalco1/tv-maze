module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src/app',
          '@commons': './src/commons',
          '@configs': './src/configs',
          '@themes': './src/themes',
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
