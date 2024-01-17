import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
