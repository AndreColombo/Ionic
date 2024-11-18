/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
// Importação do Serviço de Pet
import { PetService } from './../../services/pet.service';
// Importação da classe de Pet
import { Pet } from './../../models/Pet';
// Importação das classes responsaveis pelo gerenciamento de rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-pet',
  templateUrl: './alterar-pet.page.html',
  styleUrls: ['./alterar-pet.page.scss'],
})
export class AlterarPetPage implements OnInit {
  // Intância uma classe para o Pet
  pet: Pet = new Pet();

  constructor(
    private petService: PetService, // Instancia o serviço do pet na variável petService
    private route: Router, // Instancia o gerenciador de rotas
    private rotaAtiva: ActivatedRoute // Instancia o gerenciador de rotas ativas
  ) {
    // Pega o ID que veio pela rota e salva dentro da propriedade id do pet
    this.pet.id = this.rotaAtiva.snapshot.params['id'];
  }

  ngOnInit() {
    // Busca os dados do pet com o ID que veio pela rota
    this.petService.buscarPorId(this.pet.id).subscribe((dados: any) => {
      this.pet.nome = dados['nome'];
      this.pet.especie = dados['especie'];
      this.pet.raca = dados['raca'];
      this.pet.idade = dados['idade'];
      this.pet.observacoes = dados['observacoes'];
    });
  }

  // Método que envia os dados do pet para alterar
  salvar() {
    // Envia os dados do pet para serem alterados
    this.petService.alterar(this.pet);
    // Volta para a página home.
    this.route.navigateByUrl('/');
  }
}
