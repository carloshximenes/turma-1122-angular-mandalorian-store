import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  @Input() equipamento!: EquipmentType;
  @Output() verDetalhes = new EventEmitter<string>();

  public clickHandler() {
    this.verDetalhes.emit(this.equipamento.id);
  }

  public favoriteHandler() {
    const favoritos = localStorage.getItem('favoritos');
    if (!favoritos) {
      this.equipamento.isFavorite = true;
      const novoFavorito = [this.equipamento.id];
      localStorage.setItem('favoritos', JSON.stringify(novoFavorito));
    } else {
      const listaFavoritos: string[] = JSON.parse(favoritos);
      const jahEhFavorito = !!listaFavoritos.find(
        (item) => item === this.equipamento.id
      );
      if (jahEhFavorito) {
        this.equipamento.isFavorite = false;
        const novaListaFavoritos = listaFavoritos.filter(
          (item) => item !== this.equipamento.id
        );
        localStorage.setItem('favoritos', JSON.stringify(novaListaFavoritos));
      } else {
        this.equipamento.isFavorite = true;
        listaFavoritos.push(this.equipamento.id);
        localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
      }
    }
  }
}
