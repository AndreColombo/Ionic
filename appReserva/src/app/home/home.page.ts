import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router) {}
  valorDiaria = 0;
  dias = 0;
  total = 0;
  calcDiarias() {
    this.total = this.dias * this.valorDiaria;
    this.router.navigateByUrl(
      `/tela-confirmar/${this.valorDiaria}/${this.dias}/${this.total}`
    );
  }
}
