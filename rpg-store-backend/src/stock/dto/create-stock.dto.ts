import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsString()
  line?: string; 
}
