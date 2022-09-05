import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import Header from '../components/Header';

import { HeaderProps } from '../interfaces';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    setSearchInfo: { action: 'setSearchInfo' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});

export const Search = Template.bind({});
Search.play = async () => {
    await userEvent.type(screen.getByLabelText('Search the library...'), 'Harry Potter');
    await userEvent.click(screen.getByLabelText('Search by...'));
    await userEvent.click(screen.getByText(/Title/));
    await userEvent.click(screen.getByLabelText('search'));
};