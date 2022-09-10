import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchResults from '../pages/search/[name]/[searchBy]';
import { ManyItems } from './BookList.stories';

export default {
  title: 'Pages/Search Results',
  component: SearchResults,
  parameters: {
    chromatic: { viewports: [320, 600, 1200] },
  }
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args: any) => <SearchResults {...args} />;

export const NoResults = Template.bind({});


export const ManyResults = Template.bind({});
ManyResults.args = {
    data: {
        totalItems: 100,
        items: ManyItems.args ? ManyItems.args.books : undefined
    }
}
