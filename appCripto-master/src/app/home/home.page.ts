import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  message: string = '';
  secretKey: string = '';
  encryptedMessage: string = '';
  decryptedMessage: string = '';

  encryptMessage() {
    if (this.message && this.secretKey) {
      const encrypted = CryptoJS.AES.encrypt(
        this.message,
        this.secretKey
      ).toString();
      this.encryptedMessage = encrypted;
    }
  }

  decryptMessage() {
    if (this.encryptedMessage && this.secretKey) {
      const bytes = CryptoJS.AES.decrypt(this.encryptedMessage, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage = decrypted;
    }
  }
}
