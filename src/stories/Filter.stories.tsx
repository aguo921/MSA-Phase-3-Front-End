import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import Filter from '../components/Filter';

import { FilterProps } from '../interfaces';

import { expect } from '@storybook/jest';

export default {
  title: 'Components/Header/Filter',
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

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
SelectAny.play = async ({args}) => {
    await sleep(1000)
    await userEvent.click(screen.getByLabelText('Search by...'));

    await sleep(1000)
    await userEvent.click(screen.getByText(/Any/));

    await waitFor(() => expect(args.setSearchBy).toHaveBeenCalledWith('any'))
    await expect(screen.getByRole('button')).toHaveTextContent('Any')
};

export const SelectAuthor = Template.bind({});
SelectAuthor.play = async ({args}) => {
  await sleep(1000)
    await userEvent.click(screen.getByLabelText('Search by...'));

    await sleep(1000)
    await userEvent.click(screen.getByText(/Author/));

    await waitFor(() => expect(args.setSearchBy).toHaveBeenCalledWith('inauthor'))
    await expect(screen.getByRole('button')).toHaveTextContent('Author')
};

export const SelectTitle = Template.bind({});
SelectTitle.play = async ({args}) => {
  await sleep(1000)
    await userEvent.click(screen.getByLabelText('Search by...'));

    await sleep(1000)
    await userEvent.click(screen.getByText(/Title/));

    await waitFor(() => expect(args.setSearchBy).toHaveBeenCalledWith('intitle'))
    await expect(screen.getByRole('button')).toHaveTextContent('Title')
};