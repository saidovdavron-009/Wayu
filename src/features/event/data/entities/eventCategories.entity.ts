import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { Events } from './events.entity';

@Entity('event-category')
export class EventCategories extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title!: string;

  @OneToMany(() => Events,(even)=>even.eventCategory)
  event?:Events
}
