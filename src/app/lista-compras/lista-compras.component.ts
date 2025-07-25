import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ItemLista } from './itemLista';


@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  lista: ItemLista[] = [];
  nomeItem: string = "";
  
  addItem(){
    let item = new ItemLista();;
    item.nome = this.nomeItem;
    item.id =   this.lista.length + 1;

    this.lista.push(item);
    this.nomeItem = ""
  }

  limparLista(){
    this.lista = [];
  }

}
