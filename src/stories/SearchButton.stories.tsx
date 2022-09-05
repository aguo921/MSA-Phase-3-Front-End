import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import SearchButton from '../components/SearchButton';

import { SearchButtonProps } from '../interfaces';

export default {
  title: 'Search Button',
  component: SearchButton,
  argTypes: {
    onClick: { action: 'click' }
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'blue', value: '#1976d2' },
        { name: 'white', value: '#ffffff' },
      ],
    }
  }
} as ComponentMeta<typeof SearchButton>;

const Template: ComponentStory<typeof SearchButton> = (args: SearchButtonProps) => <SearchButton {...args} />;

export const Default = Template.bind({});

export const Click = Template.bind({});

Click.play = async () => {
    await userEvent.click(screen.getByRole('button'));
};

export const Focus = Template.bind({});

Focus.play = async () => {
    await screen.getByRole('button').focus();
};