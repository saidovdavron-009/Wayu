import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { News } from './news.entity';
import { Tags } from '../../../common/data/entities/tags.entity';

@Entity('newsTags')
export class NewsTag {
  @PrimaryColumn()
  newsId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => News, (news) => news.newsTags)
  @JoinColumn({ name: 'newsId' })
  news: News;

  @ManyToOne(() => Tags, (tag) => tag.newsTags)
  tag: Tags;
}