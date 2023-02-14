import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";
import {Subscription} from "rxjs";
import {ItemService} from "../../services/item/item.service";

@Component({
    selector: 'app-item-view',
    templateUrl: './item-view.component.html',
    styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

    items: Item[];
    itemsSubscription: Subscription;
    activeItem: Item | null;
    activeItemSubscription: Subscription;

    constructor(private itemService: ItemService) {
        this.itemsSubscription = this.itemService.getItems().subscribe((data: Item[]) => this.items = data);
        this.activeItemSubscription = this.itemService.getActiveItem().subscribe( (data: Item | null) => this.activeItem = data);
    }

    ngOnInit(): void {
    }

}
