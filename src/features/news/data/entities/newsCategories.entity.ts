import { Column, Entity, OneToMany } from 'typeorm';
import { News } from './news.entity';
import { BaseModel } from '@/core/base-model';

@Entity('news-categories')
export class NewsCategories extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title!: string;

  @OneToMany(() => News,(news) => news.newsCategory)
  news? : News[]
}
