import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { News } from './news.entity';

@Entity('news-categories')
export class NewsCategories extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title!: string;

  @OneToMany(() => News,(news) => news.newsCategory)
  news? : News[]
}
