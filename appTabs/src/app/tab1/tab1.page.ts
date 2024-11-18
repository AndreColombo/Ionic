import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '24/04/2019',
      duracao: '3h01m',
      classificacao: 6,
      cartaz:
        'https://image.tmdb.org/t/p/w200//9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false,
    },
    {
      nome: 'Espiral: O Legado de Jogos Mortais (2021)',
      lancamento: '12/05/2021',
      duracao: '1h33m',
      classificacao: 6,
      cartaz:
        'https://image.tmdb.org/t/p/w200//jJ7eIqsVLtRwLCX6KeJNeQYjPar.jpg',
      generos: ['Terror', 'Mistério'],
      pagina: '/espiral',
      favorito: false,
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '07/04/2021',
      duracao: '1h50m',
      classificacao: 7,
      cartaz:
        'https://image.tmdb.org/t/p/w200//44aCR6cjH0FbzW6PMw3Ega178iW.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false,
    },
    {
      nome: 'Ghosted: Sem Resposta (2023)',
      lancamento: '18/04/2023',
      duracao: '1h57m',
      classificacao: 7,
      cartaz:
        'https://image.tmdb.org/t/p/w200//89p7MQ3I5wKzOEO0OCCXEdUqX9R.jpg',
      generos: ['Ação', 'Comédia', 'Romance'],
      pagina: '/ghosted',
      favorito: false,
    },
    {
      nome: 'Alien: Romulus (2024)',
      lancamento: '13/08/2024',
      duracao: '1h59m',
      classificacao: 7,
      cartaz:
        'https://image.tmdb.org/t/p/w200//6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg',
      generos: ['Terror', 'Ficção científica'],
      pagina: '/alien-romulus',
      favorito: false,
    },
  ];

  exibirFilme(filme: IFilme) {
    const navigationExtra: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtra);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          },
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
