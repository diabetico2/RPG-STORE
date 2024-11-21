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

  constructor(private authService: AuthService, private router: Router) {
    console.log('LoginComponent carregado!'); // Log para verificar carregamento
  }

  onSubmit() {
    console.log('Tentando autenticar com:', this.email, this.password);
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) { // Verifica se a resposta contém o token
          localStorage.setItem('authToken', response.token); // Salva o token no localStorage
          console.log('Login bem-sucedido! Redirecionando para Main...');
          alert('Login bem-sucedido!');
          this.router.navigate(['/main']); // Redireciona para o MainComponent
        } else {
          console.error('Erro: Token não encontrado na resposta.');
          alert('Erro de login! Verifique suas credenciais.');
        }
      },
      (error) => {
        console.error('Erro ao autenticar:', error);
        alert('Erro de login! Verifique suas credenciais.');
      }
    );
  }
  

  onForgotPassword() {
    alert('Instruções para redefinir sua senha foram enviadas para seu e-mail.');
  }
}
