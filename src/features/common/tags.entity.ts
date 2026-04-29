import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Faqs } from '../support/faqs.entity';
import { FaqsTag } from '../support/faqsTags.entity';
import {BaseModel} from "@/core/base-model";
import {News} from "@/features/news/news/news.entity";
import {NewsTag} from "@/features/news/news-tags/news-tags.entity";
import type {Relation} from "typeorm";

@Entity('tags')
export class Tags extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title!: string;

  @ManyToMany(() => News, (news) => news.tags)
  news: Relation<News[]>;

  @ManyToMany(() => Faqs, (faq) => faq.tags)
  faqs: Relation<Faqs[]>;
}