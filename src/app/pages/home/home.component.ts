import { Component } from '@angular/core';
import { EquipmentListMock } from 'src/app/mocks/equipment-list.mock';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public listaEquipamentos: EquipmentType[] = [];

  constructor() {
    this.listaEquipamentos = EquipmentListMock;
  }

  public filtrarEquipamentosPorNome(nome: string) {
    if(nome.length === 0) {
      this.listaEquipamentos = EquipmentListMock;
      return;
    }
    this.listaEquipamentos = EquipmentListMock.filter(equip => equip.name.toLowerCase().includes(nome.toLowerCase()));
  }
}
