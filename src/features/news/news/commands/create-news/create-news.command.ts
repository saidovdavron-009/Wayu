import {Command} from "@nestjs/cqrs";
import {Allow, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {CreateNewsResponse} from "@/features/news/news/commands/create-news/create-news.response";
import {Type} from "class-transformer";

export class CreateNewsCommand extends Command<CreateNewsResponse> {
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  categoryId!: number

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  countryId?: number

  @IsString()
  @ApiProperty()
  @MaxLength(256)
  title!: string

  @Allow()
  @ApiProperty({type: "string", format: "binary"})
  image!: string

  @IsString()
  @ApiProperty()
  date!: string

  @IsString()
  @ApiProperty()
  content!: string
}