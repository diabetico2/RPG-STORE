import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { StockItem } from './entities/stock-item.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([StockItem]), // Registra a entidade StockItem
  ],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule {}
