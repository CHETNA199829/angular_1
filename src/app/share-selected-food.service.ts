import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareSelectedFoodService {
  private selectedItemsSource = new BehaviorSubject<any[]>([]); 
  selectedItems$ = this.selectedItemsSource.asObservable();
  constructor() { }
  setSelectedItems(items: any[]) {
    this.selectedItemsSource.next(items);
  }
  getSelectedFoodItems() {
    return this.getSelectedFoodItems;
  }

}
