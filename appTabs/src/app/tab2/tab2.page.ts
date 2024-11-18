import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad (2008)',
      lancamento: '20/01/2008',
      duracao: '5 temp.',
      classificacao: 8,
      cartaz:
        'https://image.tmdb.org/t/p/w200//30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/breaking-bad',
      favorito: false,
    },
    {
      nome: 'Rick e Morty (2013)',
      lancamento: '02/12/2013',
      duracao: '7 Temp.',
      classificacao: 8,
      cartaz:
        'https://image.tmdb.org/t/p/w200//5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg',
      generos: [
        'Animação',
        'Comédia',
        'Sci-Fi & Fantasy',
        'Action & Adventure',
      ],
      pagina: '/rick-morty',
      favorito: false,
    },
    {
      nome: 'Invencível (2021)',
      lancamento: '25/03/2021',
      duracao: '2 Temp.',
      classificacao: 8,
      cartaz:
        'https://image.tmdb.org/t/p/w200//uZaLC2IxPgGI68m2W0eva8pPvaI.jpg',
      generos: ['Animação', 'Sci-Fi & Fantasy', 'Action & Adventure', 'Drama'],
      pagina: '/invencivel',
      favorito: false,
    },
    {
      nome: 'Ahsoka (2023)',
      lancamento: '22/08/2023',
      duracao: '1 Temp.',
      classificacao: 7,
      cartaz:
        'https://image.tmdb.org/t/p/w200//eiJeWeCAEZAmRppnXHiTWDcCd3Q.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure'],
      pagina: '/ahsoka',
      favorito: false,
    },
  ];

  exibirSerie(serie: ISerie) {
    const navigationExtra: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtra);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
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
