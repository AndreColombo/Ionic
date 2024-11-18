import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { IPessoa } from '../model/IPessoa';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  listaPessoas: IPessoa[] = [
    {
      nome: 'Christian Bale',
      nascimento: '30/01/1974',
      cartaz:
        'https://image.tmdb.org/t/p/w200//v2Oks7DTbZcKzSi2Pw58C7SSLzM.jpg',
      genero: 'Masculino',
      pagina: '/christian-bale',
      favorito: false,
    },
    {
      nome: 'Ryan Reynolds',
      nascimento: '23/10/1976',
      cartaz:
        'https://image.tmdb.org/t/p/w200//2Orm6l3z3zukF1q0AgIOUqvwLeB.jpg',
      genero: 'Masculino',
      pagina: '/ryan-reynolds',
      favorito: false,
    },
    {
      nome: 'Gal Gadot-Varsano',
      nascimento: '30/04/1985',
      cartaz:
        'https://image.tmdb.org/t/p/w200//g55dgcZQkLMolkKqgP7OD2yfGXu.jpg',
      genero: 'Feminino',
      pagina: '/gal-gadot',
      favorito: false,
    },
  ];

  exibirPessoa(pessoa: IPessoa) {
    const navigationExtra: NavigationExtras = {
      state: { paramPessoa: pessoa },
    };
    this.router.navigate(['pessoa-detalhe'], navigationExtra);
  }

  async exibirAlertaFavorito(pessoa: IPessoa) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            pessoa.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            pessoa.favorito = true;
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
