import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservado',
  templateUrl: './reservado.page.html',
  styleUrls: ['./reservado.page.scss'],
})
export class ReservadoPage implements OnInit {
  constructor(public ar: ActivatedRoute) {}
  total: any | undefined;

  ngOnInit() {
    this.total = this.ar.snapshot.paramMap.get('total');
  }
}
