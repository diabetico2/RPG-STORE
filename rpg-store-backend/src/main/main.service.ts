// src/main/main.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  getWelcomeMessage() {
    return { message: 'Bem-vindo à página principal da loja RPG!' };
  }
}
