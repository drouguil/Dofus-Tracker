import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreedEnum } from '../../../../enums/BreedEnum';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  static instance: HttpService;

  constructor(private http: HttpClient) {
    HttpService.instance = this;
  }

  public getSpellById(id: number): Observable<any> {
    return this.http.get('http://localhost:1337/spell/' + id);
  }

  public getItemById(id: number): Observable<any> {
    return this.http.get('http://localhost:1337/item/' + id);
  }

  public getMonsterById(id: number): Observable<any> {
    return this.http.get('http://localhost:1337/mob/' + id);
  }

  public getServers(): Observable<any> {
    return this.http.get('http://localhost:1337/server');
  }

  public getSpellsCouplesByBreed(breed: BreedEnum): Observable<any> {
    return this.http.get('http://localhost:1337/spellcouple?breed=' + breed);
  }

  public getCommonsSpells(): Observable<any> {
    return this.http.get('http://localhost:1337/spell?id=350&id=364&id=366&id=367&id=368&id=369&id=370&id=373&id=413&id=414&id=3506');
  }

  public getDevices(): Observable<any> {
    return this.http.get('http://localhost:8999/devices');
  }

  public config(params: any): Observable<any> {
    return this.http.post('http://localhost:8999/config', params);
  }
}
