import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private base = '/api/products';

  constructor( private readonly http: HttpClient ) { }

  findProducts(){
    return this.http.get(this.base);
  }
    
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>( `${this.base}/${id}` );
  }

  createProduct(product: Product) {
    console.log('SERVICE in DataService createProduct to add product: ', product);
    return this.http.post(this.base, product)
  }

  updateProduct(id: string, product: Product) {
    return this.http.put(`${this.base}/${id}`, product)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${id}`)
  }


}