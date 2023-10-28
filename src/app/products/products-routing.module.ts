import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    component: BasicsPageComponent,
    path: 'basics'
  }, 
  {
    component: NumbersPageComponent,
    path: 'numbers'
  }, 
  {
    component: UncommonPageComponent,
    path: 'uncommon'
  },
  {
    component: OrderComponent,
    path: 'custom'
  },
  {
    component: BasicsPageComponent,
    redirectTo: '**'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
