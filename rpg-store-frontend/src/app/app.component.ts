import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LoginComponent],
  template: '<app-login/>', // Usa o Angular Router
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
