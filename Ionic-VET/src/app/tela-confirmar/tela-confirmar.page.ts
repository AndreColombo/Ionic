import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {
  nome: any;
  email: any;
  telefone: any;

  constructor(public activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.nome = this.activatedRouter.snapshot.paramMap.get('nome');
    this.email = this.activatedRouter.snapshot.paramMap.get('email');
    this.telefone = this.activatedRouter.snapshot.paramMap.get('telefone');
  }
}
