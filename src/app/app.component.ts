import { Component } from '@angular/core';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_1';
  // categoryData: any;

// constructor(private apicall: ApicallService) {}

//   ngOnInit() {
//     this.getCategory();
//   }

//   getCategory() {
//     const productId = 'your_product_id';  // Replace with your actual product ID
    // this.apicall.getCategoryByProductId(productId).subscribe(
    //   data => {
    //     console.log('Success:', data);
    //     this.categoryData = data;
    //   },
    //   error => {
    //     console.error('Error:', error);
    //   }
    // );
  // }
}
