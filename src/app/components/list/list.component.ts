import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Item} from "../../models/item.model";
import {ItemService} from "../../services/item/item.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    items: Item[];
    itemsSubscription: Subscription;
    activeItem: Item | null;
    activeItemSubscription: Subscription;

    constructor(private itemService: ItemService) {
        this.itemsSubscription = this.itemService.getItems().subscribe( (data: Item[]) => this.items = data);
        this.activeItemSubscription = this.itemService.getActiveItem().subscribe( (data: Item | null) => this.activeItem = data);
    }

    ngOnInit(): void {
    }


    setActiveItem(item: Item): void {
        if (item.id !== this.activeItem?.id) {
            this.itemService.setActiveItem(item);
        } else {
            this.itemService.setActiveItem(null);
        }
    }
}
