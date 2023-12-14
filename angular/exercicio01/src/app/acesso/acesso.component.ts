import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao : string[] = ['root', 'admin', 'visitante']
  login : string = '';
  isLogged: boolean = true;

  public verifyPermission(){
    if(this.login == this.permissao[0]){
      this.isLogged = !this.isLogged;
    }
  }

  public onLogando(): void{
    alert('Logando ...');
  }
  public onClick(): void{
    this.isLogged = !this.isLogged;
  }
}
