module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    ['babel-plugin-react-compiler', {target: '19'}],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.src'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
