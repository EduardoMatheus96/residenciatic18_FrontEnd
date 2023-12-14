import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome: string =  "Arara-Azul";
  arara_Url : string = "https://segredosdomundo.r7.com/wp-content/uploads/2020/01/arara-azul-carateristicas-e-comportamento-5.jpg";
  input_Text: string = "Arara";

  public onClick(): void{
    alert('Clicou em mim!');
  }
}
