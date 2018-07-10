import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CarMaker } from '../../models/car-maker';

@Injectable({
  providedIn: 'root'
})
export class CarsMakersService {

  private api = environment.api_publica_url;

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<any>(`${this.api}/cars-makers`);
  }

  register(carMaker: CarMaker): Observable<any> {
    return this.http.post<any>(`${this.api}/cars-makers`, carMaker);
  }

}
