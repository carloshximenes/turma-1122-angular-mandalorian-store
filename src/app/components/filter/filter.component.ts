import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public filtro: string = '';
  @Output() filtroEmitter: EventEmitter<string> = new EventEmitter<string>();

  public buscarEquipamentoPorNome() {
    this.filtroEmitter.emit(this.filtro);
  }

  public limparFiltro() {
    this.filtro = '';
    this.filtroEmitter.emit(this.filtro);
  }
}
