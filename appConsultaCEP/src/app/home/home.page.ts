import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cep: string = '';
  estado: string = '';
  cidade: string = '';
  rua: string = '';
  enderecos: any[] = [];
  pesquisaRealizada: boolean = false;

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  buscar() {
    if (this.cep) {
      this.buscarPorCep();
    } else if (this.estado && this.cidade && !this.rua) {
      this.exibirErro(
        'Nome da Rua é obrigatório ao buscar por Cidade e Estado.'
      );
    } else if (this.cidade && this.rua) {
      if (!this.estado) {
        this.estado = 'SP';
        this.exibirErro('Estado não fornecido. Usando padrão: SP.');
      }
      this.buscarPorEstadoCidadeRua();
    } else {
      if (!this.cidade && this.rua) {
        this.exibirErro(
          'Cidade é obrigatória quando Nome da Rua está preenchido.'
        );
      } else if (!this.estado && !this.cidade && !this.rua) {
        this.exibirErro('Preencha o CEP ou Cidade e Rua.');
      } else {
        this.exibirErro('Preencha ao menos o CEP ou Cidade e Rua.');
      }
    }
  }

  buscarPorCep() {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(
      (res: any) => {
        if (res.erro) {
          this.exibirErro('CEP não encontrado.');
          this.enderecos = [];
        } else {
          this.enderecos = [res];
        }
        this.pesquisaRealizada = true;
      },
      (erro) => {
        this.exibirErro('Erro ao consultar a API: ' + erro.message);
        this.pesquisaRealizada = true;
      }
    );
  }

  buscarPorEstadoCidadeRua() {
    this.http
      .get(
        `https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.rua}/json/`
      )
      .subscribe(
        (res: any) => {
          if (res.length === 0) {
            this.exibirErro('Endereço não encontrado.');
          }
          this.enderecos = res;
          this.pesquisaRealizada = true;
        },
        (erro) => {
          this.exibirErro('Erro ao consultar a API: ' + erro.message);
          this.pesquisaRealizada = true;
        }
      );
  }

  async exibirErro(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 4000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }
}
