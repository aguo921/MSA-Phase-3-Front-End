import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import Filter from '../components/Filter';

import { FilterProps } from '../interfaces';

export default {
  title: 'Filter',
  component: Filter,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {action: 'clicked'}
  },
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

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export const SelectOptions = Template.bind({});
SelectOptions.play = async () => {
    await sleep(1000);

    await userEvent.click(screen.getByRole('button'));
    await sleep(1000);

    await userEvent.click(screen.getByText('Author'));
    await sleep(1000);

    await userEvent.click(screen.getByText('Title'));
    await sleep(1000);

    await userEvent.click(screen.getByText('Any'));
    await sleep(1000);

    await userEvent.click(screen.getByRole('presentation'));

};