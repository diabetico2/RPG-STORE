import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    console.log(`Tentando autenticar o usuário com email: ${email}`); // Adicionado
    const user = await this.userRepository.findOneBy({ email });

    if (user) {
      const isPasswordMatching = await bcrypt.compare(password, user.password);
      console.log(`Senha correspondente: ${isPasswordMatching}`); // Adicionado
      if (isPasswordMatching) {
        return user;
      }
    }
    return null;
  }
}
