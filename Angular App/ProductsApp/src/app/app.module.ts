import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import { UpdateComponent} from './update/update.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import{ProductGuard} from './product.guard';

const routes: Routes = [
                        // {path:'',redirectTo:'/product',pathMatch:'full'},
                        {path:'product',component:ProductListComponent,canActivate: [ProductGuard]},
                         {path:'add',component:NewproductComponent,canActivate: [ProductGuard]},
                        {path:'update',component: UpdateComponent},
                        {path:'login',component:LoginComponent},
                        {path:'register',component:RegisterComponent}
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
