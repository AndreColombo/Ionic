import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  idade = 0;
  sexo = '';
  altura = 0;
  peso = 0;
  imc = 0;
  pgc = 0;
  massaMagra = 0;
  gcb = 0;
  mensagemFinal = '';
  //exibir a idade no pin do range de idade:
  pinFormatterIdade(value: number) {
    return `${value}`;
  }
  //exibir a idade no pin do range de altura:
  pinFormatterAltura(value: number) {
    return `${value}`;
  }
  calculaIMC() {
    this.mensagemFinal = '';
    let alturaMetro = this.altura / 100;
    this.imc = this.peso / (alturaMetro * alturaMetro);
    if (this.imc < 18.5) {
      this.mensagemFinal =
        'Seu IMC indica aumento de risco para problemas de saúde associados à desnutrição. ';
    } else if (this.imc < 24.9) {
      this.mensagemFinal =
        'Seu IMC indica Baixo risco de problemas de saúde associados ao peso. ';
    } else if (this.imc < 29.9) {
      this.mensagemFinal =
        'Seu IMC indica Aumento de risco para doenças cardiovasculares e outras condições relacionadas ao peso. ';
    } else {
      this.mensagemFinal =
        'Seu IMC indica Alto risco de doenças cardiovasculares, diabetes tipo 2, e outras condições relacionadas ao peso. ';
    }
    this.calculaGorduraCorporal();
  }
  calculaGorduraCorporal() {
    if (this.sexo === 'f') {
      this.pgc = 1.2 * this.imc + 0.23 * this.idade - 5.4;
      if (this.pgc < 16) {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria atleta. ';
      } else if (this.pgc <= 30) {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria normal. ';
      } else {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria acima do normal, que indica excesso de gordura corporal. ';
      }
    } else {
      this.pgc = 1.2 * this.imc + 0.23 * this.idade - 10.8 * 1 - 5.4;
      if (this.pgc < 6) {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria atleta. ';
      } else if (this.pgc <= 24) {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria normal. ';
      } else {
        this.mensagemFinal +=
          'Ja o seu Percentual de Gordura corporal indica que você se enquadra na categoria acima do normal, que indica excesso de gordura corporal. ';
      }
    }
    this.calculaMassaMuscular();
  }
  calculaMassaMuscular() {
    if (this.sexo === 'f') {
      this.massaMagra = 0.252 * this.peso + 0.473 * this.altura - 48.3;
    } else {
      this.massaMagra = 0.407 * this.peso + 0.267 * this.altura - 19.2;
    }
    if (this.massaMagra < 30) {
      this.mensagemFinal +=
        'Quanto a sua massa magra, seu índice indica falta de massa muscular. ';
    } else if (this.massaMagra <= 40) {
      this.mensagemFinal += 'Quanto a sua massa magra, faixa saudável. ';
    } else {
      this.mensagemFinal +=
        'Quanto a sua massa magra, seu índice indica alta massa muscular, muito comum em atletas. ';
    }
    this.calculaGCB();
  }
  calculaGCB() {
    if (this.sexo === 'f') {
      this.gcb =
        447.593 + 9.247 * this.peso + 3.098 * this.altura + 5.677 * this.idade;
    } else {
      this.gcb =
        88.362 + 13.397 * this.peso + 4.799 * this.altura + 4.33 * this.idade;
    }
    if (this.gcb < 1800) {
      this.mensagemFinal +=
        'E para finalizar, seu Gasto Calórico Basal indica necessidade de aumento na ingestão calórica para manutenção do peso e saúde geral.';
    } else if (this.gcb < 2400) {
      this.mensagemFinal +=
        'E para finalizar, seu Gasto Calórico Basal indica que você está na média das pessoas moderadamente ativas.';
    } else {
      this.mensagemFinal +=
        'E para finalizar, seu Gasto Calórico Basal indica que você é um indivíduo com alta atividade física.';
    }
  }
}
