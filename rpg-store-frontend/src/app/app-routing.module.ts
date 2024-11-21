import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Tela de Login
  { path: 'main', component: MainComponent }, // Tela Principal
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para login por padrão
  { path: '**', redirectTo: '/login' }, // Rota fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
