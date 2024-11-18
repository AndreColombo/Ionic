import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Faz a importação do Angular Firestone
import { Pet } from '../models/Pet'; // Faz a importação da classe de entidade do Pet

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private afs: AngularFirestore) {} // Instancia  na variável afs o Angular Firestore

  // Método para salvar novos pets no Firebase
  // Recebe uma instância da classe Pet
  salvar(pet: Pet) {
    // Considere a collection como uma espécie de tabela pets
    // Método add recebe o objeto que será salvo
    // {...var} Faz a desconstrução para que o Firebase salve apenas os atributos
    return this.afs.collection('pets').add({ ...pet });
  }

  // Busca todos os pets armazenados
  buscarPet() {
    return this.afs.collection('pets').snapshotChanges();
  }

  // Busca um pet através do seu ID
  buscarPorId(id: string) {
    // Método doc() faz referência a apenas um documento (registro) do banco
    return this.afs.collection('pets').doc(id).valueChanges();
  }

  // Altera um registo do banco
  alterar(pet: Pet) {
    return this.afs
      .collection('pets')
      .doc(pet.id)
      .update({ ...pet });
  }

  // Deleta um registo do banco
  deletar(id: string) {
    return this.afs.doc('pets/' + id).delete();
  }
}
