import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { VacancyType } from '../core/enum/enum';
import { Applications } from './applications.entity';

@Entity('vacancy')
export class Vacancies extends BaseModel {
  @Column({ type: 'varchar', length: 256 })
  title!: string;

  @Column({ type: 'varchar', length: 128 })
  address!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber!: string;

  @Column({ type: 'enum' })
  type!: VacancyType;

  @Column({ type: 'varchar', length: 64 })
  salary!: string;

  @Column({ type: 'bool', default: true })
  isActive!: boolean;

  @OneToMany(() => Applications, (application) => application.vacancy)
  application?: Applications[];
}
