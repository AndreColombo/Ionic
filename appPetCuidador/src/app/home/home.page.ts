/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { PetService } from './../services/pet.service'; // Importa o serviço do Pet
import { CuidadorService } from './../services/cuidador.service'; // Importa o serviço do Cuidador
import { Pet } from './../models/Pet'; // Importa a classe do Pet
import { Cuidador } from './../models/Cuidador'; // Importa a classe do Cuidador
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Variável que armazena a lista de pets que será exibida
  public listaPets: Pet[] = [];
  public listaCuidadores: Cuidador[] = [];

  // Instancia os serviços do pet e do cuidador nas variáveis petService e cuidadorService
  constructor(
    private petService: PetService,
    private cuidadorService: CuidadorService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.buscarPets(); // Chama o método que busca todos os pets no Firbase
    this.buscarCuidadores(); // Chama o método que busca todos os cuidadores no Firbase
  }

  // Método para buscar todos os pets no Firebase.
  buscarPets() {
    // Chama o método de buscar pets no Firebase e se sobrescreve para receber o retorno
    // O retorno (registros) é armazenado na variavel dadosRetorno
    this.petService.buscarPet().subscribe((dadosRetorno) => {
      // Percorre todos os registros que vieram no retorno e mapeia para a lista de pets.
      this.listaPets = dadosRetorno.map((registro: any) => ({
        id: registro.payload.doc.id, // Pega o ID do Registro no Firebase
        nome: registro.payload.doc.data()['nome'], // Pega o nome do Pet
        especie: registro.payload.doc.data()['especie'], // Pega a espécie do Pet
        raca: registro.payload.doc.data()['raca'], // Pega a raça do Pet
        idade: registro.payload.doc.data()['idade'], // Pega a idade do Pet
        observacoes: registro.payload.doc.data()['observacoes'], // Pega as observações do Pet
      })); // Fim do map
    }); // Fim do subscribe
  }
  // Método para deletar registros no Firebase após confirmação
  async deletarPet(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirma exclusão deste pet?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.petService.deletar(id); // Chama o serviço e deleta o registro no Firebase
          },
        },
      ],
    });
    await alert.present();
    this.buscarPets(); // Recarrega a lista de Pets
  }

  // Método para buscar todos os cuidadores no Firebase.
  buscarCuidadores() {
    // Chama o método de buscar cuidadores no Firebase e se sobrescreve para receber o retorno
    // O retorno (registros) é armazenado na variavel dadosRetorno
    this.cuidadorService.buscarCuidador().subscribe((dadosRetorno) => {
      // Percorre todos os registros que vieram no retorno e mapeia para a lista de cuidadores.
      this.listaCuidadores = dadosRetorno.map((registro: any) => ({
        id: registro.payload.doc.id, // Pega o ID do Registro no Firebase
        nome: registro.payload.doc.data()['nome'], // Pega o nome do Cuidador
        telefone: registro.payload.doc.data()['telefone'], // Pega o telefone do Cuidador
        experiencia: registro.payload.doc.data()['experiencia'], // Pega a experiência do Cuidador
        especialidades: registro.payload.doc.data()['especialidades'], // Pega as especialidades do Cuidador
      })); // Fim do map
    }); // Fim do subscribe
  }
  // Método para deletar registros no Firebase após confirmação
  async deletarCuidador(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirma exclusão deste cuidador?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.cuidadorService.deletar(id); // Chama o serviço e deleta o registro no Firebase
          },
        },
      ],
    });
    await alert.present();
    this.buscarCuidadores(); // Recarrega a lista de Cuidadores
  }
}
