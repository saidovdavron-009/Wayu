import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { Authors } from './authors.entity';
import { BookCategories } from './bookCategories.entity';

@Entity('books')
export class Books extends BaseModel {
  @Column({ type: 'int' })
  authorId!: number;

  @Column({ type: 'int' })
  categoryId!: number;

  @Column({ type: 'varchar', length: 256 })
  title!: string;

  @Column({ type: 'varchar', length: 128 })
  image!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 256 })
  file!: string;

  @Column({ type: 'int' })
  pages!: number;

  @Column({ type: 'int' })
  year!: number;

  @ManyToOne(() => Authors, (author) => author.book)
  book?: Authors;

  @ManyToOne(() => BookCategories, (category) => category.book)
  category?: Authors;
}
