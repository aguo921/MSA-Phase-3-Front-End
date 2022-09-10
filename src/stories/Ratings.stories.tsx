import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Ratings from '../components/Ratings';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { RatingsProps } from '../interfaces';

export default {
  title: 'Components/BookList/BookItem/Ratings',
  component: Ratings,
} as ComponentMeta<typeof Ratings>;

const Template: ComponentStory<typeof Ratings> = (args: RatingsProps) => <Ratings {...args} />;

export const RatingOne = Template.bind({});
RatingOne.args = {
    ratingsCount: 10,
    averageRating: 5
}

export const RatingTwo = Template.bind({});
RatingTwo.args = {
    ratingsCount: 12,
    averageRating: 2.5
}

export const HoverRating = Template.bind({});
HoverRating.args = {
  ratingsCount: 14,
  averageRating: 4
}

HoverRating.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    await userEvent.hover(canvas.getByTitle('14 ratings'))
  })
};