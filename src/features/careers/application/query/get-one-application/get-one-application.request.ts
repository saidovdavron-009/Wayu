import {Query} from "@nestjs/cqrs";
import {GetOneApplicationResponse} from "@/features/careers/application/query/get-one-application/get-one-application.response";
import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetOneApplicationQuery extends Query<GetOneApplicationResponse> {
  @IsNumber()
  @ApiProperty()
  id!: number
}
