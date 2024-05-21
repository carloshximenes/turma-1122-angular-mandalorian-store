import { Injectable } from '@angular/core';
import { EquipmentListMock } from 'src/app/mocks/equipment-list.mock';
import { EquipmentType } from 'src/app/types/equipment.type';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _URL = 'https://mandalorian-store.netlify.app/api';

  constructor(private _http: HttpClient) {}

  public getListaEquipamento(
    filtroNome: string = ''
  ): Observable<EquipmentType[]> {
    const nome = filtroNome.trim();
    const options = nome
      ? { params: new HttpParams().set('search', nome) }
      : {};
    return this._http.get<EquipmentType[]>(`${this._URL}/equipments`, options);
  }

  public getEquipamento(id: string): Observable<EquipmentType> {
    return this._http.get<EquipmentType>(`${this._URL}/equipments/${id}`);
  }
}
