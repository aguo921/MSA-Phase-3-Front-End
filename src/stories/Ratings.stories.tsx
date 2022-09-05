import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Ratings from '../components/Ratings';

import { RatingsProps } from '../interfaces';

export default {
  title: 'Ratings',
  component: Ratings,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Ratings>;;

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

export const RatingThree = Template.bind({});