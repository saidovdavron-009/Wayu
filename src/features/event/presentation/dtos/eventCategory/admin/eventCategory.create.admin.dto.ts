import { IsString, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventCategoryCreateAdminDto {
  @IsString()
  @MaxLength(4)
  @ApiProperty()
  title!: string;
}
