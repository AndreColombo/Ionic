/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
// Importação do Serviço de Cuidador
import { CuidadorService } from './../../services/cuidador.service';
// Importação da classe de Cuidador
import { Cuidador } from './../../models/Cuidador';
// Importação das classes responsaveis pelo gerenciamento de rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-cuidador',
  templateUrl: './alterar-cuidador.page.html',
  styleUrls: ['./alterar-cuidador.page.scss'],
})
export class AlterarCuidadorPage implements OnInit {
  // Intância uma classe para o Cuidador
  cuidador: Cuidador = new Cuidador();

  constructor(
    private cuidService: CuidadorService, // Instancia o serviço do cuidador na variável cuidService
    private route: Router, // Instancia o gerenciador de rotas
    private rotaAtiva: ActivatedRoute // Instancia o gerenciador de rotas ativas
  ) {
    // Pega o ID que veio pela rota e salva dentro da propriedade id do cuidador
    this.cuidador.id = this.rotaAtiva.snapshot.params['id'];
  }

  ngOnInit() {
    // Busca os dados do cuidador com o ID que veio pela rota
    this.cuidService.buscarPorId(this.cuidador.id).subscribe((dados: any) => {
      this.cuidador.nome = dados['nome'];
      this.cuidador.telefone = dados['telefone'];
      this.cuidador.experiencia = dados['experiencia'];
      this.cuidador.especialidades = dados['especialidades'];
    });
  }

  // Método que envia os dados do cuidador para alterar
  salvar() {
    // Envia os dados do cuidador para serem alterados
    this.cuidService.alterar(this.cuidador);
    // Volta para a página home.
    this.route.navigateByUrl('/');
  }
}
