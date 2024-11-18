import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.page.html',
  styleUrls: ['./decrypt.page.scss'],
})
export class DecryptPage implements OnInit {
  secretKey: string = '';

  encryptedNome: string = '';
  encryptedEmail: string = '';
  encryptedNota: string = '';

  decryptedNome: string = '';
  decryptedEmail: string = '';
  decryptedNota: string = '';

  constructor(public activatedRouter: ActivatedRoute) {}

  decryptMessages() {
    if (
      this.encryptedNome &&
      this.encryptedNome &&
      this.encryptedNota &&
      this.secretKey
    ) {
      const bytesNome = CryptoJS.AES.decrypt(
        this.encryptedNome,
        this.secretKey
      );
      const bytesEmail = CryptoJS.AES.decrypt(
        this.encryptedEmail,
        this.secretKey
      );
      const bytesNota = CryptoJS.AES.decrypt(
        this.encryptedNota,
        this.secretKey
      );
      const decryptedNome = bytesNome.toString(CryptoJS.enc.Utf8);
      this.decryptedNome = decryptedNome;
      const decryptedEmail = bytesEmail.toString(CryptoJS.enc.Utf8);
      this.decryptedEmail = decryptedEmail;
      const decryptedNota = bytesNota.toString(CryptoJS.enc.Utf8);
      this.decryptedNota = decryptedNota;
    }
  }

  ngOnInit() {
    this.encryptedNome =
      this.activatedRouter.snapshot.paramMap.get('encryptedNome') ?? '';
    this.encryptedEmail =
      this.activatedRouter.snapshot.paramMap.get('encryptedEmail') ?? '';
    this.encryptedNota =
      this.activatedRouter.snapshot.paramMap.get('encryptedNota') ?? '';
  }
}
