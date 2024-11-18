import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservadoPage } from './reservado.page';

const routes: Routes = [
  {
    path: '',
    component: ReservadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservadoPageRoutingModule {}
