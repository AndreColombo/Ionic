import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pinFormatter(value: number) {
    return `${value}°C`;
  }

  constructor(public router: Router) {}
  mes1 = 0;
  mes2 = 0;
  mes3 = 0;
  mes4 = 0;
  media = 0;
  culturas: string[] = [];

  lista = '';

  calcMedia() {
    this.media = (this.mes1 + this.mes2 + this.mes3 + this.mes4) / 4;
    this.culturas = [];

    if (
      this.media < -5 ||
      this.media > 40 ||
      (this.media > 30 && this.media < 35)
    ) {
      this.lista = `Nenhuma cultura é adequada para o plantio em ${this.media}°C`;
    } else {
      if (this.media >= -5 && this.media <= 10) {
        this.culturas.push('Couve');
      }
      if (this.media >= 15 && this.media <= 25) {
        this.culturas.push('Morango');
      }
      if (this.media >= 20 && this.media <= 30) {
        this.culturas.push('Uva');
      }
      if (this.media >= 15 && this.media <= 30) {
        this.culturas.push('Laranja');
      }
      if (this.media >= 18 && this.media <= 27) {
        this.culturas.push('Tomate');
      }
      if (this.media >= 18 && this.media <= 24) {
        this.culturas.push('Milho');
      }
      if (this.media >= 16 && this.media <= 18) {
        this.culturas.push('Alface');
      }
      if (this.media >= 18 && this.media <= 24) {
        this.culturas.push('Café');
      }
      if (this.media >= 26 && this.media <= 30) {
        this.culturas.push('Banana');
      }
      if (this.media >= 35 && this.media <= 40) {
        this.culturas.push('Milheto');
      }

      this.lista = `Com a temperatura média de ${
        this.media
      }°C, é possível plantar: ${this.culturas.join(', ')}.`;
    }

    this.router.navigateByUrl(`/lista-culturas/${this.lista}/${this.media}`);
  }
}
