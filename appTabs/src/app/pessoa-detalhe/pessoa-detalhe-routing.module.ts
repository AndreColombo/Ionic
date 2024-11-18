import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaDetalhePage } from './pessoa-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaDetalhePageRoutingModule {}
