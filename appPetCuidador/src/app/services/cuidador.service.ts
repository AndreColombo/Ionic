import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Faz a importação do Angular Firestone
import { Cuidador } from '../models/Cuidador'; // Faz a importação da classe de entidade do Cuidador

@Injectable({
  providedIn: 'root',
})
export class CuidadorService {
  constructor(private afs: AngularFirestore) {} // Instancia  na variável afs o Angular Firestore

  // Método para salvar novos cuidadores no Firebase
  // Recebe uma instância da classe Cuidador
  salvar(cuidador: Cuidador) {
    // Considere a collection como uma espécie de tabela cuidadores
    // Método add recebe o objeto que será salvo
    // {...var} Faz a desconstrução para que o Firebase salve apenas os atributos
    return this.afs.collection('cuidadores').add({ ...cuidador });
  }

  // Busca todos os cuidadores armazenados
  buscarCuidador() {
    return this.afs.collection('cuidadores').snapshotChanges();
  }

  // Busca um cuidador através do seu ID
  buscarPorId(id: string) {
    // Método doc() faz referência a apenas um documento (registro) do banco
    return this.afs.collection('cuidadores').doc(id).valueChanges();
  }

  // Altera um registo do banco
  alterar(cuidador: Cuidador) {
    return this.afs
      .collection('cuidadores')
      .doc(cuidador.id)
      .update({ ...cuidador });
  }

  // Deleta um registo do banco
  deletar(id: string) {
    return this.afs.doc('cuidadores/' + id).delete();
  }
}
