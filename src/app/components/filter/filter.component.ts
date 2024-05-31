import { Component, EventEmitter, Output } from '@angular/core';
import { availableOptionsConstants } from 'src/app/constants/available-options.constants';
import { sortOptionsConstants } from 'src/app/constants/sort-options.constants';
import { EquipmentFilterType } from 'src/app/types/equipment-filter.type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filtro: string = '';
  public sortOrder: string = '';
  public isAvailable: string = '';

  public availableOptions = availableOptionsConstants;
  public sortOptions = sortOptionsConstants;

  @Output() filtroEmitter: EventEmitter<EquipmentFilterType> =
    new EventEmitter<EquipmentFilterType>();

  public buscarEquipamentoPorNome() {
    const filtroEquipamento: EquipmentFilterType = {
      search: this.filtro,
      sort: this.sortOrder,
      orderBy: 'name',
    };

    if (this.isAvailable.trim().length > 0) {
      filtroEquipamento.isAvailable = this.isAvailable === 'true';
    }

    this.filtroEmitter.emit(filtroEquipamento);
  }

  public limparFiltro() {
    // this.filtro = '';
    // this.filtroEmitter.emit(this.filtro);
  }
}
