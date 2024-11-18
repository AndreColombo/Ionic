import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura = '';
  peso = 0;
  radioSelecionada = '';

  constructor(private alertController: AlertController) {}

  calcularPesoIdeal() {
    if (this.radioSelecionada == '') {
      this.peso = 72.7 * parseFloat(this.altura) - 58;
    } else {
      this.peso = 62.1 * parseFloat(this.altura) - 44.7;
    }
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'APP Peso Ideal',
      subHeader: 'A Sub Header Is Optional',
      message: this.peso.toFixed(2),
      buttons: ['OK'],
    });

    await alert.present();
  }
}
