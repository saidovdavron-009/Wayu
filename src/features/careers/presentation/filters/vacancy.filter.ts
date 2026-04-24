import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationFilters } from '../../../common/presentation/pagination.filter';

export class VacancyFilter extends PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required : false})
  search? : string
}