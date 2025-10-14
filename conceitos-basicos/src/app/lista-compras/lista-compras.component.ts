import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemLista = new ItemLista();

    if(this.item){
      itemLista.nome = this.item;
      itemLista.id = this.lista.length +1;
      this.lista.push(itemLista);
      this.item = '';
    }else{
      alert("Necessário indicar o item!");
    }
    

    console.table(this.lista);
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
