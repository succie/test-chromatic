import React from 'react';

import { Link } from './Link';

export default {
  title: 'library-c/Link',
  component: Link
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'this is link text.'
};
