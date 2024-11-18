import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPessoa } from '../model/IPessoa';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.page.html',
  styleUrls: ['./pessoa-detalhe.page.scss'],
})
export class PessoaDetalhePage implements OnInit {
  pessoa: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.pessoa = getNav.extras.state['paramPessoa'];
      }
    });
  }
}
