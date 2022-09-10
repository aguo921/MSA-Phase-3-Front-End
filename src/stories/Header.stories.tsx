import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import Header from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    chromatic: { viewports: [320, 600, 1200] }
  },
} as ComponentMeta<typeof Header>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

export const Search = Template.bind({});
Search.play = async () => {
  await sleep(1000)
    await userEvent.click(screen.getByLabelText('Search by...'))

    await sleep(1000)
    await userEvent.click(screen.getByText(/Title/))

    await sleep(1000)
    await userEvent.type(screen.getByLabelText('Search the library...'), 'Harry Potter', {delay: 100})

    await sleep(1000)
    await userEvent.click(screen.getByLabelText('search'))
};