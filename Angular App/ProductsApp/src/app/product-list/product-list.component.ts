import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String ='Product List';
  //  Product is the model class for a product item
  products: ProductModel[];
 
  // Image Properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  // Creating Service Object for calling getProducts()
  constructor(private productService: ProductService,private router: Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
 
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    // Calling getProducts() and loading the products to products array
     this.productService.getProducts().subscribe((data)=>{
       this.products = JSON.parse(JSON.stringify(data));
     })
  }
  updateProduct(){
    this.router.navigate(['/update']);
  }
}
