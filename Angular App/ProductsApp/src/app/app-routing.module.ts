import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import { UpdateComponent} from './update/update.component';

const routes: Routes = [{path:'',component:ProductListComponent},
                        {path:'add',component:NewproductComponent},
                        {path:'update',component: UpdateComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
