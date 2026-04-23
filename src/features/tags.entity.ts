import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { News } from './news.entity';
import { NewsTag } from './newsTags.entity';
import { Faqs } from './faqs.entity';
import { FaqsTag } from './faqsTags.entity';

@Entity('tags')
export class Tags extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title!: string;

  @ManyToMany(() => News, (news) => news.tags)
  news: News[];

  @OneToMany(() => NewsTag, (newsTag) => newsTag.tag)
  newsTags: NewsTag[];

  @ManyToMany(() => Faqs, (faq) => faq.tags)
  faqs: Faqs[];

  @OneToMany(() => FaqsTag, (faqsTag) => faqsTag.tag)
  faqsTags: FaqsTag[];
}