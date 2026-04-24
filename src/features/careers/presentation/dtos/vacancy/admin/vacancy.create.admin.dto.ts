import { IsBoolean, IsEnum, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VacancyType } from '../../../../../../core/enum/enum';

export class VacancyCreateAdminDto {
  @IsString()
  @Length(4, 256)
  @ApiProperty()
  title!: string;

  @IsString()
  @Length(4, 128)
  @ApiProperty()
  address!: string;

  @IsString()
  @ApiProperty()
  description!: string;

  @IsString()
  @Length(9, 16)
  @ApiProperty()
  phoneNumber!: string;

  @IsEnum(VacancyType)
  @ApiProperty()
  type!: VacancyType;

  @IsString()
  @Length(4, 64)
  @ApiProperty()
  salary!: string;

  @IsBoolean()
  @ApiProperty()
  isActive!: boolean;
}
