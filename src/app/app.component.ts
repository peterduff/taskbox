import {Component, OnInit} from '@angular/core';
import {ItemService} from "./services/item/item.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'taskbox';

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.itemService.httpGetData().subscribe(data => {
            this.itemService.setItems(data);
        });
    }
}
