import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import Filter from '../components/Filter';

import { FilterProps } from '../interfaces';

export default {
  title: 'Filter',
  component: Filter,
  argTypes: {
    setSearchBy: { action: 'setSearchBy' }
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'blue', value: '#1976d2' },
        { name: 'white', value: '#ffffff' },
      ],
    }
  },
  decorators: [
    (Story) => (
      <div style={{width: '200px'}}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args: FilterProps) => <Filter {...args} />;

export const Any = Template.bind({});
Any.args = {
    searchBy: "any"
}

export const Author = Template.bind({});
Author.args = {
    searchBy: "inauthor"
}

export const Title = Template.bind({});
Title.args = {
    searchBy: "intitle"
}

export const SelectAny = Template.bind({});
SelectAny.play = async () => {
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText(/Any/));
};

export const SelectAuthor = Template.bind({});
SelectAuthor.play = async () => {
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText(/Author/));
};

export const SelectTitle = Template.bind({});
SelectTitle.play = async () => {
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText(/Title/));
};