import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import SearchBar from '../components/SearchBar';

import { SearchBarProps } from '../interfaces';

export default {
  title: 'Components/Header/SearchBar',
  component: SearchBar,
  argTypes: {
    setValue: { action: 'setValue' },
    onEnter: { action: 'onEnter'}
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
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args: SearchBarProps) => <SearchBar {...args} />;

export const Empty = Template.bind({});

export const Filled = Template.bind({});

Filled.play = async () => {
    await userEvent.type(screen.getByLabelText('Search the library...'), 'Harry Potter');
};