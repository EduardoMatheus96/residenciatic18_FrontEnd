import { HighlightPipePipe } from './highlightPipe/highlight-pipe.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';
import { WikipediaService } from './wikiServer/wikipedia-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipePipe,
    BarraBuscaComponent,
    ResultadoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
