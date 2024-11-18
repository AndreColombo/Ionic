import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-culturas',
  templateUrl: './lista-culturas.page.html',
  styleUrls: ['./lista-culturas.page.scss'],
})
export class ListaCulturasPage implements OnInit {
  lista: any;
  media: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.lista = this.activatedRoute.snapshot.paramMap.get('lista');
    this.media = this.activatedRoute.snapshot.paramMap.get('lista');
  }
}
