import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../core/base-model';
import { ApplicationStatus } from '../core/enum/enum';
import { Vacancies } from './vacancies.entity';

@Entity('application')
export class Applications extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  fullName!: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber!: string;

  @Column({ type: 'varchar', length: 64 })
  email!: string;

  @Column({ type: 'int' })
  vacancyId!: number;

  @Column({ type: 'string', length: 128 })
  resume!: string;

  @Column({ type: 'enum', default: 'active' })
  status!: ApplicationStatus;

  @ManyToOne(() => Vacancies, (vacancy) => vacancy.application)
  vacancy?: Vacancies;
}
