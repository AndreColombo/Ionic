import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-total-pagar',
  templateUrl: './total-pagar.page.html',
  styleUrls: ['./total-pagar.page.scss'],
})
export class TotalPagarPage implements OnInit {
  valorFinal: any;

  constructor(public activatedRouter: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.valorFinal = this.activatedRouter.snapshot.paramMap.get('valorFinal');
  }
}
