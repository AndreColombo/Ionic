import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  pergunta1 = '';
  pergunta2 = '';
  pergunta3 = '';
  pergunta4 = '';
  pergunta5 = '';
  pergunta6 = '';
  pergunta7 = '';
  pergunta8 = '';
  animaisRestantes = [
    'Cachorro',
    'Gato',
    'Papagaio',
    'Urso',
    'Raposa',
    'Girafa',
    'Ornitorrinco',
    'Guaxinim',
    'Rinoceronte',
  ];
  resposta = '';

  animalCorreto() {
    this.filtrarAnimais();
    this.verificarResultado();
  }

  filtrarAnimais() {
    if (this.pergunta1 === 'sim1') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Gato',
          'Raposa',
          'Girafa',
          'Ornitorrinco',
          'Rinoceronte',
        ].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Papagaio', 'Urso', 'Guaxinim'].includes(animal)
      );
    }

    if (this.pergunta2 === 'sim2') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Urso', 'Girafa', 'Rinoceronte'].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Gato',
          'Papagaio',
          'Raposa',
          'Ornitorrinco',
          'Guaxinim',
        ].includes(animal)
      );
    }

    if (this.pergunta3 === 'sim3') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Cachorro', 'Gato', 'Papagaio', 'Raposa', 'Guaxinim'].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Urso', 'Girafa', 'Ornitorrinco', 'Rinoceronte'].includes(animal)
      );
    }

    if (this.pergunta4 === 'sim4') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Papagaio'].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Gato',
          'Urso',
          'Raposa',
          'Girafa',
          'Ornitorrinco',
          'Guaxinim',
          'Rinoceronte',
        ].includes(animal)
      );
    }

    if (this.pergunta5 === 'sim5') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Raposa', 'Girafa', 'Guaxinim'].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Gato',
          'Papagaio',
          'Urso',
          'Ornitorrinco',
          'Rinoceronte',
        ].includes(animal)
      );
    }

    if (this.pergunta6 === 'sim6') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Raposa', 'Guaxinim'].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Gato',
          'Papagaio',
          'Urso',
          'Girafa',
          'Ornitorrinco',
          'Rinoceronte',
        ].includes(animal)
      );
    }

    if (this.pergunta7 === 'sim7') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Raposa',
          'Girafa',
          'Ornitorrinco',
          'Guaxinim',
          'Rinoceronte',
        ].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Cachorro', 'Gato', 'Papagaio', 'Urso'].includes(animal)
      );
    }

    if (this.pergunta8 === 'sim8') {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        [
          'Cachorro',
          'Raposa',
          'Girafa',
          'Ornitorrinco',
          'Rinoceronte',
        ].includes(animal)
      );
    } else {
      this.animaisRestantes = this.animaisRestantes.filter((animal) =>
        ['Gato', 'Papagaio', 'Urso', 'Guaxinim'].includes(animal)
      );
    }
  }

  verificarResultado() {
    if (this.animaisRestantes.length === 1) {
      this.resposta = 'O animal escolhido é: ' + this.animaisRestantes;
    } else {
      this.resposta = 'Não foi possível determinar o animal escolhido.';
    }
  }
}
