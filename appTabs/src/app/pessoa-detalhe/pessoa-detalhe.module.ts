import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaDetalhePageRoutingModule } from './pessoa-detalhe-routing.module';

import { PessoaDetalhePage } from './pessoa-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaDetalhePageRoutingModule
  ],
  declarations: [PessoaDetalhePage]
})
export class PessoaDetalhePageModule {}
