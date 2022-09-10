import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    chromatic: { viewports: [320, 600, 1200] }
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});