import { Injectable } from '@angular/core';
import {Product} from './model/product.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl
  urlSuffix = '/products'


  constructor(private http: HttpClient) { }



  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}${this.urlSuffix}`);
  }

  findOne(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}${this.urlSuffix}/${id}`);
  }

  add(prod: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}${this.urlSuffix}`, prod);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.urlSuffix}/${id}`);
  }
}
