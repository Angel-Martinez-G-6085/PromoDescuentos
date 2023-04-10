import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//servicehttp
import { HttpClientModule } from '@angular/common/http';
import { ProductsMercadoComponent } from './products-mercado/products-mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsMercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
