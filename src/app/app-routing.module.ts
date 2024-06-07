import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetFoodComponent } from './set-food/set-food.component';
import { SelectedFoodComponent } from './selected-food/selected-food.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'setFood', component: SetFoodComponent},
  {path : 'selectedFood', component : SelectedFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
