import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCuidadorPage } from './cadastro-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCuidadorPageRoutingModule {}
