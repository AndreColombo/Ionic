import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {
  valorDiaria: any;
  dias: any;
  total: any;

  constructor(public activatedRouter: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.valorDiaria =
      this.activatedRouter.snapshot.paramMap.get('valorDiaria');
    this.dias = this.activatedRouter.snapshot.paramMap.get('dias');
    this.total = this.activatedRouter.snapshot.paramMap.get('total');
  }

  confirmar() {
    this.router.navigateByUrl(`/reservado/${this.total}`);
  }
}
