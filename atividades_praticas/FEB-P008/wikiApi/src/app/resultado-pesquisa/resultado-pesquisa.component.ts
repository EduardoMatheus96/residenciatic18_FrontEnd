import { Component, Input } from '@angular/core';
import { WikipediaService } from '../wikiServer/wikipedia-service.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css']
})
export class ResultadoPesquisaComponent {

  @Input() termo: string = '';
  @Input() resultados: any[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.wikipediaService.pesquisar(this.termo).subscribe((data: any) => {
      // this.resultados = data.query.search;
      if (data && data.query && data.query.search) {
        this.resultados = data.query.search;
    } else {
        // Tratar o caso de resposta vazia ou inválida
    }
    });
  }
}
