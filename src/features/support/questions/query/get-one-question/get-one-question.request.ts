import {Query} from "@nestjs/cqrs";
import {GetOneQuestionResponse} from "@/features/support/questions/query/get-one-question/get-one-question.response";
import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetOneQuestionQuery extends Query<GetOneQuestionResponse> {
  @IsNumber()
  @ApiProperty()
  id!: number
}
