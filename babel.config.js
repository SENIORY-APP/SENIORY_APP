module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@stacks': './src/stacks',
          '@utils': './src/utils',
          '@store': './src/store',
          '@': './src',
        },
      },
    ],
  ],
};
