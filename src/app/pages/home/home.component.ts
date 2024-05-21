import { Component } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public listaEquipamentos: EquipmentType[] = [];

  constructor(private _homeService: HomeService) {
    this.filtrarEquipamentosPorNome();
  }

  public filtrarEquipamentosPorNome(nome: string = '') {
    this._homeService
      .getListaEquipamento(nome)
      .subscribe((resp) => (this.listaEquipamentos = resp));
  }

  public getDetalhesEquipamento(id: string) {
    this._homeService.getEquipamento(id).subscribe((resp) => console.log(resp));
  }
}
