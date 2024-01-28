import { Component } from '@angular/core';
import { WikipediaService } from './wikiServer/wikipedia-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultados: any[] = [];
  termo: string = '';
  constructor(private wiki: WikipediaService) { }

  onPesquisa(termo: string):void {
    this.termo = termo;
    this.wiki.pesquisar(termo).subscribe(data => this.resultados = data.query.search);
  }
}
