import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import { ProductService} from './product.service';
import {UsersService} from './users.service';
import {ProductGuard} from './product.guard';
import {TokenInterceptorService} from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewproductComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
   providers: [ ProductService,UsersService, ProductGuard,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
   }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
