import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Faqs } from './faqs.entity';
import { Tags } from '../../../common/data/entities/tags.entity';
import { BaseModel } from '@/core/base-model';
import type {Relation} from "typeorm";

@Entity('faqsTags')
export class FaqsTag extends BaseModel{
  @PrimaryColumn()
  faqsId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Faqs, (faq) => faq.faqsTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'faqsId' })
  faq: Relation<Faqs>;

  @ManyToOne(() => Tags, (tag) => tag.faqsTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tagId' })
  tag: Relation<Tags>;
}