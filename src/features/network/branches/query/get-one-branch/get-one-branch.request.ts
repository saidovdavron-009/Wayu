import {Query} from "@nestjs/cqrs";
import {GetOneBranchResponse} from "@/features/network/branches/query/get-one-branch/get-one-branch.response";
import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetOneBranchQuery extends Query<GetOneBranchResponse> {
  @IsNumber()
  @ApiProperty()
  id!: number
}
