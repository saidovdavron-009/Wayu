import {IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Command} from "@nestjs/cqrs";

export class DeleteNewsCategoryCommand extends Command<void>{
  @IsString()
  @ApiProperty()
  id!: number
}