import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  valorConta = 0;
  porcentagem = 0;
  valorGorjeta = 0;
  valorFinal = 0;

  calcularGorjeta() {
    this.valorGorjeta = this.valorConta * (this.porcentagem / 100);
    this.valorFinal = this.valorConta + this.valorGorjeta;
  }

  // ----------------------------

  valorConverter = 0;
  unidadeEntrada = '';
  unidadeSaida = '';
  valorConvertido = '';

  calcularConversao() {
    if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'mi') {
      this.valorConvertido = (this.valorConverter * 0.621371).toFixed(2);
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'mi') {
      this.valorConvertido = (this.valorConverter * 0.000621371).toFixed(2);
    } else if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'ft') {
      this.valorConvertido = (this.valorConverter * 3280.94).toFixed(2);
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'ft') {
      this.valorConvertido = (this.valorConverter * 3.28084).toFixed(2);
    } else {
      this.valorConvertido = 'Unidades de medida não suportadas';
    }
  }

  // ----------------------------

  altura = 0;
  peso = 0;
  imc = 0;
  saida = '';

  calcularIMC() {
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    if (imc < 18.5) {
      this.saida = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      this.saida = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      this.saida = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      this.saida = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
      this.saida = 'Obesidade Grau II';
    } else {
      this.saida = 'Obesidade Grau III';
    }
  }
}
