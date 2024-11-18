import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarCuidadorPageRoutingModule } from './alterar-cuidador-routing.module';

import { AlterarCuidadorPage } from './alterar-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarCuidadorPageRoutingModule
  ],
  declarations: [AlterarCuidadorPage]
})
export class AlterarCuidadorPageModule {}
