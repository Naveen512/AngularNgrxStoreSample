import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import{map} from "rxjs/operators";
import {Cake} from '../models/model'
import { Observable } from 'rxjs';

@Injectable()
export class CakeService {
  constructor(private http: HttpClient) {}

  get(): Observable<Cake[]>{
     return this.http.get("./assets/cakes.json").pipe(map(data=> data["AllCakes"] as Cake[]))
  }
}
