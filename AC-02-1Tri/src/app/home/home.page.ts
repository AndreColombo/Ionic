import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quilometros = '';
  preco = 0;
  radioSelecionadaQ = '';
  app = 0;
  motorista = 0;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  calcularPreco() {
    if (this.radioSelecionadaQ == 'N') {
      this.preco = parseFloat(this.quilometros) * 2.5 + 5;
    } else if (this.radioSelecionadaQ == 'S') {
      this.preco = parseFloat(this.quilometros) * 3.5 + 7.5;
    } else {
      this.preco = parseFloat(this.quilometros) * 5.5 + 10;
    }
    this.calcularPorcentagem();
  }

  calcularPorcentagem() {
    if (this.preco <= 150) {
      this.app = this.preco * 0.25;
      this.motorista = this.preco * 0.75;
    } else {
      this.app = this.preco * 0.2;
      this.motorista = this.preco * 0.8;
    }
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'APP Preço Viagem',
      subHeader: 'O preço da viagem é de:',
      message:
        'Total: R$' +
        this.preco.toFixed(2) +
        'Aplicativo: R$' +
        this.app.toFixed(2) +
        'Motorista: R$' +
        this.motorista.toFixed(2),
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Exercício 2

  quilometragem = '';
  combustivel = '';
  radioSelecionadaC = '';
  valor = 0;

  calcularValor() {
    if (this.radioSelecionadaC == 'E') {
      this.valor =
        (parseFloat(this.quilometragem) / 9) * parseFloat(this.combustivel);
    } else if (this.radioSelecionadaC == 'G') {
      this.valor =
        (parseFloat(this.quilometragem) / 12) * parseFloat(this.combustivel);
    } else {
      this.valor =
        (parseFloat(this.quilometragem) / 15) * parseFloat(this.combustivel);
    }
    this.exibirToast();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Valor a pagar: R$' + this.valor.toFixed(2),
      duration: 2000,
    });
    await toast.present();
  }
}
