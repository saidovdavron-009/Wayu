import {IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Command} from "@nestjs/cqrs";
import {DeleteNewsCategoryResponse} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.response";

export class DeleteNewsCategoryCommand extends Command<DeleteNewsCategoryResponse>{
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  id!: string
}