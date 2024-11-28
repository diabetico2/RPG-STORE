import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString() // Remove validação de formato de email
  readonly email: string;

  @IsString()
  @MinLength(5)
  readonly password: string;
}
