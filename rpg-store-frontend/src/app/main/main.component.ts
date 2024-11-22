import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('authToken');
    console.log('Logout iniciado, redirecionando para login...');
    this.router.navigate(['/login']);
  }
}
