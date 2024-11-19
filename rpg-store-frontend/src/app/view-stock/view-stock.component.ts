import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-stock',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css'],
})
export class ViewStockComponent {
  stock: any[] = [];
  searchTerm: string = ''; // Nome atualizado para refletir o HTML

  constructor(private http: HttpClient) {
    this.loadStock();
  }

  loadStock(): void {
    this.http.get<any[]>('http://localhost:3000/stock').subscribe(
      (data) => {
        this.stock = data;
      },
      (error) => {
        console.error('Erro ao carregar os dados:', error);
      }
    );
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      // Se o campo de busca estiver vazio, recarregar o estoque completo
      this.loadStock();
      return;
    }

    this.http
      .get<any[]>(`http://localhost:3000/stock?search=${this.searchTerm}`)
      .subscribe(
        (data) => {
          this.stock = data; // Atualiza a tabela com os dados filtrados
        },
        (error) => {
          console.error('Erro ao realizar a busca:', error);
        }
      );
  }
  logout(): void {
    alert('Você clicou em Sair!');
    // Aqui você pode adicionar a lógica de logout, como redirecionar para a página de login
  }

}
