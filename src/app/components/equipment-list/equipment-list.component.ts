import { Component, Input } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent {
  @Input() listaEquipamentos: EquipmentType[] = [];
}
