import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Tags } from '../../../common/data/entities/tags.entity';
import { FaqsTag } from './faqsTags.entity';

@Entity('faqs')
export class Faqs extends BaseModel {
  @Column({ type: 'varchar', length: 256, nullable: false })
  question!: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  answer!: string;

  @ManyToMany(() => Tags, (tag) => tag.faqs)
  tags: Tags[];

  @OneToMany(() => FaqsTag, (faqsTag) => faqsTag.faq)
  faqsTags: FaqsTag[];
}