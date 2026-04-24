import { IsEnum, IsNumber, IsString, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatus } from '../../../../../../core/enum/enum';

export class ApplicationCreateAdminDto {
  @IsString()
  @Length(4, 64)
  @ApiProperty()
  fullName!: string;

  @IsString()
  @Length(9, 16)
  @ApiProperty()
  phoneNumber!: string;

  @IsString()
  @Length(4, 64)
  @ApiProperty()
  email!: string;

  @IsNumber()
  @ApiProperty()
  vacancyId!: number;

  @IsString()
  @Length(4, 128)
  @ApiProperty()
  resume!: string;

  @IsEnum(ApplicationStatus)
  @ApiProperty()
  status!: ApplicationStatus;
}
