import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Faz a importação do Angular Firestone
import { Produto } from '../models/Produto'; // Faz a importação da classe de entidade do Produto

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private afs: AngularFirestore) {} // Instancia  na variável afs o Angular Firestore

  // Método para salvar novos produtos no Firebase
  // Recebe uma instância da classe Produto
  salvar(produto: Produto) {
    // Considere a collection como uma espécie de tabela produtos
    // Método add recebe o objeto que será salvo
    // {...var} Faz a desconstrução para que o Firebase salve apenas os atributos
    return this.afs.collection('produtos').add({ ...produto });
  }

  // Busca todos os produtos armazenados
  buscarProduto() {
    return this.afs.collection('produtos').snapshotChanges();
  }

  // Busca um produto através do seu ID
  buscarPorId(id: string) {
    // Método doc() faz referência a apenas um documento (registro) do banco
    return this.afs.collection('produtos').doc(id).valueChanges();
  }

  // Altera um registo do banco
  alterar(produto: Produto) {
    return this.afs.collection('produtos').doc(produto.id).update({ ...produto });
  }

  // Deleta um registo do banco
  deletar(id: string) {
    return this.afs.doc('produtos/' + id).delete();
  }
}
