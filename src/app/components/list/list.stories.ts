import {Meta, moduleMetadata, Story} from '@storybook/angular';

import { ListComponent } from './list.component';
import {HttpClientModule} from "@angular/common/http";
import {ListItemComponent} from "../list-item/list-item.component";

export default {
    component: ListComponent,
    title: 'List',
    decorators: [
        moduleMetadata({
            declarations: [ListItemComponent],
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
    items: [
        {
            "id": "1",
            "title": "Cat",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg"
        },
        {
            "id": "2",
            "title": "Dog",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Huskiesatrest.jpg"
        },
        {
            "id": "3",
            "title": "Mouse",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg"
        }
    ],
    activeItem: null
};

export const Selected = Template.bind({});
Selected.args = {
    items: [
        {
            "id": "1",
            "title": "Cat",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg"
        },
        {
            "id": "2",
            "title": "Dog",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Huskiesatrest.jpg"
        },
        {
            "id": "3",
            "title": "Mouse",
            "state": "",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg"
        }
    ],
    activeItem: {
        id: '1',
        title: 'Cat',
        state: '',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg'
    },
};

export const NoItems = Template.bind({});
NoItems.args = {
    items: null,
    activeItem: null
};
