import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { CreateStockComponent } from './create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewStockComponent,
    CreateStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Certifique-se de que o roteamento está importado aqui
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
