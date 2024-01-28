import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.css']
})
export class BarraBuscaComponent {

  @Output() pesquisa = new EventEmitter<string>();

  termo: string = '';

  pesquisar() {
    this.pesquisa.emit(this.termo);
  }
}
