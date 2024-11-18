import { Component, OnInit } from '@angular/core';

// Importação do Serviço de Pet
import { PetService } from './../../services/pet.service';
// Importação da classe de Pet
import { Pet } from './../../models/Pet';
// Importação da classe responsavel pelo gerenciamento de rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.page.html',
  styleUrls: ['./cadastro-pet.page.scss'],
})
export class CadastroPetPage implements OnInit {
  // Intância uma classe para o Pet
  pet: Pet = new Pet();

  constructor(
    private petService: PetService, // Instancia o serviço do pet na variável petService
    private route: Router // Instancia o gerenciador de rotas
  ) {}

  ngOnInit() {}

  // Método para salvar um pet no Firebase
  salvar() {
    // Utiliza o serviço de Pets para salvar um registro no Firebase
    this.petService.salvar(this.pet);
    // Volta para a página Home
    this.route.navigateByUrl('/');
  }
}
