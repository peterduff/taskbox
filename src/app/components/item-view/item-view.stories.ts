import {Meta, moduleMetadata, Story} from '@storybook/angular';

import { ItemViewComponent } from './item-view.component';
import {HttpClientModule} from "@angular/common/http";

export default {
    component: ItemViewComponent,
    title: 'Item View',
    decorators: [
       moduleMetadata({
            imports: [HttpClientModule]
       })
    ],
    excludeStories: /.*Data$/,
} as Meta;

const Template: Story = args => ({
    props: {
        ...args
    },
});

export const Default = Template.bind({});
Default.args = {
    activeItem: null,
};

export const Selected = Template.bind({});
Selected.args = {
    activeItem: {
        id: '1',
        title: 'Cat',
        state: '',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg'
    },
};
