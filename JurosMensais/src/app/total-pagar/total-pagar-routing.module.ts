import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalPagarPage } from './total-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: TotalPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPagarPageRoutingModule {}
