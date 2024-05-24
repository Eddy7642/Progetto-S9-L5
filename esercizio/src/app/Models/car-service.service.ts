import { icar } from './icar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
private jsonUrl = "../../assets/db.json"
  constructor (private http: HttpClient) { }

getCars(): Observable <icar[]> {
  return this.http.get<icar[]>(this.jsonUrl)
}
}
