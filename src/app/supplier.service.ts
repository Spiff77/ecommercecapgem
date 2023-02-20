import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {Supplier} from './model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = environment.apiUrl
  urlSuffix = '/suppliers'


  constructor(private http: HttpClient) { }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.url}${this.urlSuffix}`);
  }

  findOne(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.url}${this.urlSuffix}/${id}`);
  }

  add(prod: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.url}${this.urlSuffix}`, prod);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.urlSuffix}/${id}`);
  }
}
