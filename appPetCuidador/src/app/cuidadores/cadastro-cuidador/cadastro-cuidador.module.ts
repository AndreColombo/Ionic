import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCuidadorPageRoutingModule } from './cadastro-cuidador-routing.module';

import { CadastroCuidadorPage } from './cadastro-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCuidadorPageRoutingModule
  ],
  declarations: [CadastroCuidadorPage]
})
export class CadastroCuidadorPageModule {}
