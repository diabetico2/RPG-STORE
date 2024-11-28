import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty({ message: 'O campo "name" é obrigatório.' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'O campo "category" é obrigatório.' })
  @IsString()
  category: string;

  @IsNotEmpty({ message: 'O campo "quantity" é obrigatório.' })
  @IsNumber()
  quantity: number;

  @IsNotEmpty({ message: 'O campo "type" é obrigatório.' })
  @IsString()
  type: string;

  @IsString()
  line?: string;
}
