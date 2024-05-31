import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    EquipmentComponent,
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RatingModule,
    ChipModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
  exports: [
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
