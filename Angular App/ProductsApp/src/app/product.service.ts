import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ProductModel} from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private product:ProductModel
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('http://localhost:3000/p/products');
  }
  newProduct(item){
    console.log('call');
    return this.http.post('http://localhost:3000/p/insert',{'product':item})
    .subscribe(data=>{console.log(data)})
  }
  // set(item){
  // this.product = item;
  // }
  //  check(){
  //    return this.product;
  // }
  updateProduct(item){
    console.log(item);
    return this.http.post('http://localhost:3000/update/edit',{'product':item})
    .subscribe(data=>{console.log(data)})
  }
  
 }
 
