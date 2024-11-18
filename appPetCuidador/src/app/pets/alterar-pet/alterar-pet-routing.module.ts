import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarPetPage } from './alterar-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarPetPageRoutingModule {}
