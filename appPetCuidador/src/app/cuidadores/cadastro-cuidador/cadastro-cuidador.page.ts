import { Component, OnInit } from '@angular/core';

// Importação do Serviço de Cuidador
import { CuidadorService } from './../../services/cuidador.service';
// Importação da classe de Cuidador
import { Cuidador } from './../../models/Cuidador';
// Importação da classe responsavel pelo gerenciamento de rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.page.html',
  styleUrls: ['./cadastro-cuidador.page.scss'],
})
export class CadastroCuidadorPage implements OnInit {
  // Intância uma classe para o Cuidador
  cuidador: Cuidador = new Cuidador();

  constructor(
    private cuidService: CuidadorService, // Instancia o serviço do cuidador na variável cuidService
    private route: Router // Instancia o gerenciador de rotas
  ) {}

  ngOnInit() {}

  // Método para salvar um cuidador no Firebase
  salvar() {
    // Utiliza o serviço de Cuidadores para salvar um registro no Firebase
    this.cuidService.salvar(this.cuidador);
    // Volta para a página Home
    this.route.navigateByUrl('/');
  }
}
