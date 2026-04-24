import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatus } from '../../../../../../core/enum/enum';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class ApplicationListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  fullName!: string;

  @Expose()
  @ApiProperty()
  phoneNumber!: string;

  @Expose()
  @ApiProperty()
  email!: string;

  @Expose()
  @ApiProperty()
  vacancyId!: number;

  @Expose()
  @ApiProperty()
  resume!: string;

  @Expose()
  @ApiProperty()
  status!: ApplicationStatus;

  @Expose()
  @ApiProperty()
  createdAt!: string;
}
