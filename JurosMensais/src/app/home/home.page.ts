import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prestacao = 0;
  taxaJuros = 0;
  mesesAtraso = 0;
  valorFinal = 0;

  constructor(public router: Router) {}

  pinFormatter(value: number) {
    return `${value}`;
  }

  calcularJuros() {
    let valorFinal = this.prestacao;
    const taxa = this.taxaJuros / 100;

    for (let i = 0; i < this.mesesAtraso; i++) {
      valorFinal += valorFinal * taxa;
    }
    this.valorFinal = valorFinal;

    this.router.navigateByUrl(`/total-pagar/${this.valorFinal.toFixed(2)}`);
  }
}
