import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationFilters } from '../../../news/presentation/pagination.filter';

export class EventCategory extends PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required : false})
  search? : string
}