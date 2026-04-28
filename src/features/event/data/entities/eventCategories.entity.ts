import {Column, Entity, OneToMany} from 'typeorm';
import {BaseModel} from '@/core/base-model';
import {Events} from './events.entity';
import type {Relation} from "typeorm";

@Entity('event-category')
export class EventCategories extends BaseModel {
  @Column({type: 'varchar', length: 64, unique: true})
  title!: string;

  @OneToMany(() => Events, (even) => even.eventCategory)
  event?: Relation<Events>
}
