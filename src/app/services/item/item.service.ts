import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Item} from "../../models/item.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private items = new Subject<Item[]>();
    private activeItem = new Subject<Item | null>();

    constructor(private http: HttpClient) {
    }

    setItems(items: Item[]): void {
        this.items.next(items);
    }

    getItems(): Observable<Item[]> {
        return this.items.asObservable();
    }

    setActiveItem(item: Item | null): void {
        this.activeItem.next(item);
    }

    getActiveItem(): Observable<Item | null> {
        return this.activeItem.asObservable();
    }

    httpGetData(): Observable<Item[]> {
        return this.http.get<Item[]>('/assets/data/data.json');
    }
}
