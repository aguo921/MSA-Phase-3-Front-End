import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import SearchButton from '../components/SearchButton';

import { SearchButtonProps } from '../interfaces';

import { expect } from '@storybook/jest';

export default {
  title: 'Components/Header/SearchButton',
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

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Default = Template.bind({});

export const Click = Template.bind({});

Click.play = async ({args}) => {
  await sleep(1000)
    await userEvent.click(screen.getByLabelText('search'));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};

export const Focus = Template.bind({});

Focus.play = async () => {
  await sleep(1000)
    await screen.getByLabelText('search').focus();
};