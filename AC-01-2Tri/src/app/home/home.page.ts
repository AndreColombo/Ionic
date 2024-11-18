import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // Exercício 1
  valorEmprestimo = 0;
  jurosAnual = 0;
  meses = 0;
  qntdJuros = 0;
  totalPagar = 0;
  prestacao = 0;

  calcularJuros() {
    this.qntdJuros = this.valorEmprestimo * (this.jurosAnual / 100);
    this.prestacao = (this.qntdJuros + this.valorEmprestimo) / this.meses;
    this.totalPagar = this.prestacao * this.meses;
  }

  // Exercício 2
  valorProduto = 0;
  total = 0;
  totalDesconto = 0;
  descontoDesejado = 0;
  desconto() {
    this.totalDesconto = this.valorProduto * (this.descontoDesejado / 100);
    this.total = this.valorProduto - this.totalDesconto;
    console.log(this.totalDesconto);
  }
}
