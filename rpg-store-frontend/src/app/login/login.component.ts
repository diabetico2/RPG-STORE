import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          alert('Login bem-sucedido!');
          this.router.navigate(['/main']);
        } else {
          alert('Erro de login! Verifique suas credenciais.');
        }
      },
      (error) => {
        alert('Erro de login! Verifique suas credenciais.');
        console.error(error);
      }
    );
  }

  // Método para redefinir senha
  onForgotPassword() {
    alert('Instruções para redefinir sua senha foram enviadas para seu e-mail.');
  }
}
