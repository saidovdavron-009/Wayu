import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import {BaseModel} from "@/core/base-model";
import {Countries} from "@/features/common/data/entities/countries.entity";
import {Tags} from "@/features/common/data/entities/tags.entity";
import {NewsTag} from "@/features/news/news-tags/news-tags.entity";
import type {Relation} from "typeorm";

@Entity('news')
export class News extends BaseModel {
  @Column({type: "int"})
  categoryId!: number

  @Column({type: "int"})
  countryId!: number

  @Column({type: "varchar", length: 256})
  title!: string

  @Column({type: "varchar", length: 128})
  image!: string

  @Column({type: "date"})
  date!: string

  @Column({type: "text"})
  content!: string

  @ManyToOne(() => News, (news) => news.category)
  category?: Relation<News>

  @ManyToOne(() => Countries, (country) => country.news)
  country?: Relation<Countries>

  @ManyToMany(() => Tags, (tag) => tag.news)
  tags: Relation<Tags[]>;

  @OneToMany(() => NewsTag, (newsTag) => newsTag.news)
  newsTags: Relation<NewsTag[]>;
}