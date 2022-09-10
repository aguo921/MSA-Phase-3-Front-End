import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from '../pages/books/[id]';

import { BookOne } from './BookItem.stories';

export default {
  title: 'Pages/Book Details',
  component: Page,
  argTypes: {
    handleChange: { action: 'expanded' }
  }
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args: any) => <Page {...args} />;

export const BookOneDetails = Template.bind({})
BookOneDetails.args = {
    data: {...BookOne.args}
}