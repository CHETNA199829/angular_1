import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  mst_product_id: number = 41199;
  branch_id: number = 4;
  is_for_repeat_set_combo: number = 0;

constructor(private apicall : ApicallService, private router: Router){}

sendData() {
  this.router.navigate(['/setFood']);
  const payload = {
    api_key: "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
    language_code: "en",
    device_id: "2CEC3804-46E6-4803-8982-88CFFCD402DD",
    device_token: "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
    device_type: "android",
    mst_product_id: this.mst_product_id,
    branch_id: this.branch_id,
    price_type: 1,
    dishtype_id: "0",
    is_for_repeat_set_combo: this.is_for_repeat_set_combo
  };
  this.apicall.sendRequest(payload).subscribe(
    response => {
      console.log('Success:', response);
    },
    error => {
      console.error('Error:', error);
    }
  );
}

}