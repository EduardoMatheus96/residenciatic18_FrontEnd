import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input() categoriaSelecionada: string | null = null;
  @Input() veiculos: { Name: string }[] = [];
  @Output() selecionarVeiculo = new EventEmitter<any>();
  @Output() nomesVeiculosSelecionados = new EventEmitter<string[]>();

  emitirNomesVeiculosSelecionados() {
    const nomesVeiculos: string[] = this.obterNomesVeiculos();

    if (nomesVeiculos && nomesVeiculos.length > 0) {
      this.nomesVeiculosSelecionados.emit(nomesVeiculos);
    }
  }

  private obterNomesVeiculos(): string[] {
    // Implemente a lógica para obter os nomes dos veículos aqui
    return ['Veiculo1', 'Veiculo2', 'Veiculo3'];  // Substitua pelo seu código real
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Código removido
  }

  selecionarVeiculoClick(veiculo: any) {
    this.selecionarVeiculo.emit(veiculo);
  }

  emitirVeiculoSelecionado(veiculo: string) {
    this.selecionarVeiculo.emit(veiculo);
  }
}
