import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarCuidadorPage } from './alterar-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarCuidadorPageRoutingModule {}
