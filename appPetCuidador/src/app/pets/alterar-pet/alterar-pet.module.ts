import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarPetPageRoutingModule } from './alterar-pet-routing.module';

import { AlterarPetPage } from './alterar-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarPetPageRoutingModule
  ],
  declarations: [AlterarPetPage]
})
export class AlterarPetPageModule {}
