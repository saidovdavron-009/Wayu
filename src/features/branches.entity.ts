import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { Countries } from './countries.entity';
import { Representatives } from './representatives.entity';

@Entity('branches')
export class Branches extends BaseModel {
  @Column({ type: 'int' })
  countryId!: number;

  @Column({ type: 'int' })
  representativeId!: number;

  @Column({ type: 'varchar', length: 64 })
  city!: string;

  @Column({ type: 'decimal' })
  latitude!: number;

  @Column({ type: 'decimal' })
  longitude!: number;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber!: string;

  @ManyToOne(() => Countries,(country) => country.branch)
  country? : Countries

  @ManyToOne(() => Representatives,(representative) => representative.branch)
  representative? : Representatives
}
