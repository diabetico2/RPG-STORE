import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
