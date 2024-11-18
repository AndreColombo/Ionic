import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  temperatura = '';
  resTemp = 0;

  calcFahrenheit() {
    this.resTemp = (9 * parseFloat(this.temperatura) + 160) / 5;
  }

  calcCelsius() {
    this.resTemp = (parseFloat(this.temperatura) - 32) * (5 / 9);
  }

  lado1 = '';
  lado2 = '';
  lado3 = '';
  resTri = '';

  verTriangulo() {
    if (
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1
    ) {
      if (this.lado1 === this.lado2 && this.lado1 === this.lado3) {
        this.resTri = 'O triângulo é Equilátero';
      } else if (
        this.lado1 === this.lado2 ||
        this.lado1 === this.lado3 ||
        this.lado2 === this.lado3
      ) {
        this.resTri = 'O triângulo é Isósceles';
      } else {
        this.resTri = 'O triângulo é Escaleno';
      }
    } else {
      this.resTri = 'Os valores não formam um triângulo';
    }
  }

  nota1 = '';
  nota2 = '';
  nota3 = '';
  nota4 = '';
  resNota = '';

  medNota() {
    const media =
      (parseInt(this.nota1) +
        parseInt(this.nota2) +
        parseInt(this.nota3) +
        parseInt(this.nota4)) /
      4;
    if (media < 3) {
      this.resNota = `média ${media}, Retido`;
    } else if (media >= 3 && media < 6) {
      this.resNota = `média ${media}, Recuperação`;
    } else {
      this.resNota = `média ${media}, Aprovado`;
    }
  }
}
