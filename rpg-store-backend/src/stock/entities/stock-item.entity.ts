import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StockItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  type: string;

  @Column({ nullable: true }) 
  line: string;
}
