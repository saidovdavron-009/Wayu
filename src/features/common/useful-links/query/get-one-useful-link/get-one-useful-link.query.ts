import {Query} from "@nestjs/cqrs";
import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {GetOneSocialLinkResponse} from "@/features/common/social-links/query/get-one-social-link/get-one-social-link.response";
import {GetOneUsefulLinkResponse} from "@/features/common/useful-links/query/get-one-useful-link/get-one-useful-link.response";

export class GetOneUsefulLinkQuery extends Query<GetOneUsefulLinkResponse> {
  @IsNumber()
  @ApiProperty()
  id!: number
}