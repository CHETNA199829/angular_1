import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
import { ShareSelectedFoodService } from '../share-selected-food.service';

@Component({
  selector: 'app-set-food',
  templateUrl: './set-food.component.html',
  styleUrls: ['./set-food.component.scss']
})
export class SetFoodComponent {
  constructor(private apicall : ApicallService, private router: Router, private shareSelectedFood : ShareSelectedFoodService){}

  
  showProducts() {
    alert('Selected products are shown.');
    this.router.navigate(['/selectedFood']);
  }
  setDessertItems = [
    { name: 'Awesome Beginnings', selected: false, required: true },
    { name: 'Cold Brew Gryphon Earl Grey Lavender Strawberry', selected: false, required: true },
    { name: 'Steamed Boston Lobster with Minced Garlic', selected: false, required: true }
  ];
  setDrinksItems = [
    { name: 'LESS ICE', selected: false, required: true },
    { name: 'LESS OIL', selected: false, required: true },
    { name: 'LESS SPICY', selected: false, required: true }
  ];
  mexianSetItems = [
    { name: 'MexianSet', selected: false, required: true }
  ];

  onItemSelected(item: any) {
    item.selected = !item.selected; 
    this.shareSelectedFood.setSelectedItems(this.getSelectedItems()); 
  }

  getSelectedItems() {
    let selectedItems = [];
    selectedItems = [...this.setDessertItems.filter(item => item.selected),
                      ...this.setDrinksItems.filter(item => item.selected),
                      ...this.mexianSetItems.filter(item => item.selected)];
    return selectedItems;
  }

  // toggleSelection(item: any, category: string) {
  //   item.selected = !item.selected;
  //   this.updateSelectedItems(); 
  // }

  // updateSelectedItems() {
    // Build the selected items array
    // this.selectedItems = [];
    // for (const category of ['mixianSetItems', 'setDessertItems', 'setDrinksItems']) {
    //   for (const item of this[category]) {
    //     if (item.selected) {
    //       this.selectedItems.push(item);
    //     }
    //   }
    // }
    // this.shareSelectedFood.setSelectedItems(this.selectedItems);
  // }

  
}
