import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BookList from '../components/BookList';
import { BookOne, BookTwo, BookThree } from './BookItem.stories';

import { BookListProps } from '../interfaces';

export default {
  title: 'BookList',
  component: BookList,
  parameters: {
    backgrounds: {
        default: 'default',
        values: [
            {name: 'default', value: 'rgb(240, 240, 255)'}
        ]
    },
    chromatic: { viewports: [320, 1200] },
  }
} as ComponentMeta<typeof BookList>;

const Template: ComponentStory<typeof BookList> = (args: BookListProps) => <BookList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    books: []
}

export const OneItem = Template.bind({});
OneItem.args = {
    books: [
        {...BookOne.args}
    ]
}

export const ManyItems = Template.bind({});
ManyItems.args = {
    books: [
        {...BookOne.args},
        {...BookTwo.args},
        {...BookThree.args}
    ]
}