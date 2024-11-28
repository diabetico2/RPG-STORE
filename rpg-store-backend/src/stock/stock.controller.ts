import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { StockItem } from './entities/stock-item.entity';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(@Query('search') search?: string): Promise<StockItem[]> {
    return this.stockService.findAll(search);
  }

  @Post()
  create(@Body() createStockDto: CreateStockDto): Promise<StockItem> {
    return this.stockService.create(createStockDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() stockItem: Partial<StockItem>) {
    return this.stockService.update(+id, stockItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stockService.remove(+id);
  }

  @Delete('clear')
  async clearAll(): Promise<void> {
    await this.stockService.clearAll();
  }
}
