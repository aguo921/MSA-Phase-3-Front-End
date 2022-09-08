import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

export const Search = Template.bind({});
Search.play = async () => {
    await waitFor(() => userEvent.type(screen.getByLabelText('Search the library...'), 'Harry Potter'));
    await waitFor(() => userEvent.click(screen.getByLabelText('Search by...')));
    await waitFor(() => userEvent.click(screen.getByText(/Title/)));
    await waitFor(() => userEvent.click(screen.getByLabelText('search')));
};