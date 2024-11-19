import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { StockItem } from './entities/stock-item.entity';
import { CreateStockDto } from './dto/create-stock.dto';


@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockItem)
    private stockRepository: Repository<StockItem>,
  ) {}

  // Método para buscar todos os itens ou itens filtrados
  async findAll(search?: string): Promise<StockItem[]> {
    if (search) {
      return this.stockRepository.find({
        where: [
          { name: Like(`%${search}%`) },
          { category: Like(`%${search}%`) },
          { line: Like(`%${search}%`) },
        ],
      });
    }
    return this.stockRepository.find();
  }

  // Método para buscar um item específico por ID
  findOne(id: number): Promise<StockItem> {
    return this.stockRepository.findOneBy({ id });
  }

  // Método para criar um novo item no estoque
  create(createStockDto: CreateStockDto): Promise<StockItem> {
    const newStockItem = this.stockRepository.create(createStockDto); // Utiliza o DTO para criar o item
    return this.stockRepository.save(newStockItem);
  }

  // Método para atualizar um item existente
  update(id: number, stockItem: Partial<StockItem>): Promise<void> {
    return this.stockRepository.update(id, stockItem).then(() => undefined);
  }

  // Método para remover um item pelo ID
  remove(id: number): Promise<void> {
    return this.stockRepository.delete(id).then(() => undefined);
  }

  // Método para limpar todos os itens no estoque
  async clearAll(): Promise<void> {
    await this.stockRepository.clear();
  }
}
