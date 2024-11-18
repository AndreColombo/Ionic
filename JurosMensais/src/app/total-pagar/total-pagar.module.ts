import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalPagarPageRoutingModule } from './total-pagar-routing.module';

import { TotalPagarPage } from './total-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalPagarPageRoutingModule
  ],
  declarations: [TotalPagarPage]
})
export class TotalPagarPageModule {}
