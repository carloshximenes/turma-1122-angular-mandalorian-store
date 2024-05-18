import { Component, Input } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  @Input() equipamento!: EquipmentType;
}
