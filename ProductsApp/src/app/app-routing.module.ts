import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {NewproductComponent} from './newproduct/newproduct.component';

const routes: Routes = [{path:'',component:ProductListComponent},
                        {path:'add',component:NewproductComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
