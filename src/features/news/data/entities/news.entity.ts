import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { NewsCategories } from './newsCategories.entity';
import { Countries } from '../../../common/data/entities/countries.entity';
import { NewsTag } from './newsTags.entity';
import { Tags } from '../../../common/data/entities/tags.entity';

@Entity('news')
export class News extends BaseModel {
  @Column({ type: 'int' })
  categoryId!: number;

  @Column({ type: 'int', nullable: true })
  countryId?: number;

  @Column({ type: 'varchar', length: 256 })
  title!: string;

  @Column({ type: 'varchar', length: 128 })
  image!: string;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'text' })
  content!: string;

  @ManyToOne(() => NewsCategories, (newsCategory) => newsCategory.news)
  newsCategory?: NewsCategories;

  @ManyToOne(() => Countries, (countries) => countries.news)
  country?: Countries;

  @OneToMany(() => NewsTag, (newsTag) => newsTag.news)
  newsTags: NewsTag[];

  @ManyToMany(() => Tags, (tag) => tag.news)
  tags: Tags[];
}