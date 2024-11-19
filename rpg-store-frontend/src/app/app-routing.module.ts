import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Login
  { path: 'view-stock', component: ViewStockComponent }, // Visualizar Estoque
  { path: 'create-stock', component: CreateStockComponent }, // Criar Estoque
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecionar para login
  { path: '**', redirectTo: '/login' }, // Redirecionar rotas inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
