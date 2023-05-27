import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppButton, ThemeAppButton } from './AppButton';

export default {
  title: 'shared/Button',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  theme: ThemeAppButton.TEXT,
};

export const Filled = Template.bind({});
Filled.args = {
  children: 'Text',
  theme: ThemeAppButton.FILLED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeAppButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ThemeAppButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
