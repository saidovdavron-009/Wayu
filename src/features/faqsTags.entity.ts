import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Faqs } from './faqs.entity';
import { Tags } from './tags.entity';
import { BaseModel } from '../core/base-model';

@Entity('faqsTags')
export class FaqsTag extends BaseModel{
  @PrimaryColumn()
  faqsId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Faqs, (faq) => faq.faqsTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'faqsId' })
  faq: Faqs;

  @ManyToOne(() => Tags, (tag) => tag.faqsTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tagId' })
  tag: Tags;
}