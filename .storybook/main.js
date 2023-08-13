/** @type {import('@storybook/types').StorybookConfig} */
const config = {
  framework: '@storybook/react-native',
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-backgrounds',
  ],
}

module.exports = config
