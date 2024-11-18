import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservadoPageRoutingModule } from './reservado-routing.module';

import { ReservadoPage } from './reservado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservadoPageRoutingModule
  ],
  declarations: [ReservadoPage]
})
export class ReservadoPageModule {}
