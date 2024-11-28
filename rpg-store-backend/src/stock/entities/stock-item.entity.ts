import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StockItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Torne opcional se necessário: @Column({ nullable: true })

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  type: string;

  @Column({ nullable: true }) // Linha pode ser opcional
  line: string;
}
