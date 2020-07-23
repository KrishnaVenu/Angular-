import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
title:String = 'Product Updation';
//  Product is the model class for a product item
products: ProductModel[];

constructor(private productService: ProductService,private router: Router) { }
  edit = new ProductModel(null,null,null,null,null,null,null,null)
 

  ngOnInit(): void {
  }
  
 editProduct(){
  this.productService.updateProduct(this.edit);
  console.log(this.edit);
  alert('Success');
  this.router.navigate(['/']);
 }
}
