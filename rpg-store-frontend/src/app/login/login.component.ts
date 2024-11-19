import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
        if (response.token) { // Verifica se a resposta contém o token
          localStorage.setItem('authToken', response.token); // Salva o token no localStorage
          alert('Login bem-sucedido!');
          this.router.navigate(['/view-stock']); // Redireciona para a página de estoque
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

  onForgotPassword() {
    alert('Instruções para redefinir sua senha foram enviadas para seu e-mail.');
  }
}
