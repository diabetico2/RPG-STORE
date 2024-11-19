// src/app/create-stock/create-stock.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  name: string = '';
  quantity: number = 0;
  type: string = '';
  line: string = '';
  category: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const newItem = {
      name: this.name,
      quantity: this.quantity,
      type: this.type,
      line: this.line,
      category: this.category,
    };

    this.http.post('http://localhost:3000/stock', newItem).subscribe(
      (response) => {
        alert('Item cadastrado com sucesso!');
        this.clearForm();
      },
      (error) => {
        console.error('Erro ao cadastrar item:', error);
        alert('Erro ao cadastrar item. Verifique os dados e tente novamente.');
      }
    );
  }

  clearForm(): void {
    this.name = '';
    this.quantity = 0;
    this.type = '';
    this.line = '';
    this.category = '';
  }
}
