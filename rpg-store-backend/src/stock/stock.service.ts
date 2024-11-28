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

  findOne(id: number): Promise<StockItem> {
    return this.stockRepository.findOneBy({ id });
  }

  create(createStockDto: CreateStockDto): Promise<StockItem> {
    const newStockItem = this.stockRepository.create(createStockDto);
    return this.stockRepository.save(newStockItem);
  }

  async update(id: number, stockItem: Partial<StockItem>): Promise<StockItem> {
    const existingItem = await this.stockRepository.findOneBy({ id });
    if (!existingItem) {
      throw new Error('Item não encontrado!');
    }
    const updatedItem = { ...existingItem, ...stockItem };
    return this.stockRepository.save(updatedItem);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.stockRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new Error('Item não encontrado para exclusão!');
    }
  }

  async clearAll(): Promise<void> {
    await this.stockRepository.clear();
  }
}
