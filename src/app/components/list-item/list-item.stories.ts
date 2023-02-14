import { Meta, Story } from '@storybook/angular';

import { ListItemComponent } from './list-item.component';

export default {
    component: ListItemComponent,
    title: 'List Item',
    excludeStories: /.*Data$/,
} as Meta;

const Template: Story = args => ({
    props: {
        ...args
    },
});

export const Default = Template.bind({});
Default.args = {
    item: null,
};

export const Selected = Template.bind({});
Selected.args = {
    item: {
        id: '1',
        title: 'Cat',
        state: '',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg'
    },
};


