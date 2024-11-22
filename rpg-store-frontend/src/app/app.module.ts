import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,  
    LoginComponent, 
    MainComponent, 
    AppRoutingModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
