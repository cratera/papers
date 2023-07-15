export default ({ config }) => ({
  ...config,
  name: 'Papers',
  slug: 'papers',
  scheme: 'papers',
  version: '0.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    // This env var is used in the storybook script to determine whether to run storybook or Papers
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
})
