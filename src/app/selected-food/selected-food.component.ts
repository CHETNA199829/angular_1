import { Component, Input } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ShareSelectedFoodService } from '../share-selected-food.service';

@Component({
  selector: 'app-selected-food',
  templateUrl: './selected-food.component.html',
  styleUrls: ['./selected-food.component.scss']
})
export class SelectedFoodComponent {
  selectedItems: any[] = [];

constructor(private apicall : ApicallService, private shareSelectedFood : ShareSelectedFoodService){}

ngOnInit() {
  this.shareSelectedFood.selectedItems$.subscribe(items => {
    this.selectedItems = items;
  });
}
}
