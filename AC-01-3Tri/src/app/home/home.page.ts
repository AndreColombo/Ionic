import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = '';
  email: string = '';
  nota: string = '';
  secretKey: string = '';

  encryptedNome: string = '';
  encryptedEmail: string = '';
  encryptedNota: string = '';

  decryptedNome: string = '';
  decryptedEmail: string = '';
  decryptedNota: string = '';

  constructor(public router: Router) {}

  encryptMessages() {
    if (this.nome && this.email && this.nota && this.secretKey) {
      const encryptedNome = CryptoJS.AES.encrypt(
        this.nome,
        this.secretKey
      ).toString();
      this.encryptedNome = encryptedNome;
      const encryptedEmail = CryptoJS.AES.encrypt(
        this.email,
        this.secretKey
      ).toString();
      this.encryptedEmail = encryptedEmail;
      const encryptedNota = CryptoJS.AES.encrypt(
        this.nota,
        this.secretKey
      ).toString();
      this.encryptedNota = encryptedNota;
    }
  }

  decrypt() {
    this.encryptedNome = encodeURIComponent(this.encryptedNome);
    this.encryptedEmail = encodeURIComponent(this.encryptedEmail);
    this.encryptedNota = encodeURIComponent(this.encryptedNota);
    this.abrirTela();
  }

  abrirTela() {
    this.router.navigateByUrl(
      `/decrypt/${this.encryptedNome}/${this.encryptedEmail}/${this.encryptedNota}`
    );
  }
}
