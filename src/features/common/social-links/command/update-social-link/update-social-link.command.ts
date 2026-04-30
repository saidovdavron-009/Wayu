import {Allow, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {Command} from "@nestjs/cqrs";
import {UpdateCountryResponse} from "@/features/common/countries/command/update-country/update-country.response";
import {UpdateSocialLinkResponse} from "@/features/common/social-links/command/update-social-link/update-social-link.response";

export class UpdateSocialLinkCommand extends Command<UpdateSocialLinkResponse> {
  @IsNumber()
  @ApiHideProperty()
  @Type(() => Number)
  @IsOptional()
  id?: number

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title?: string

  @Allow()
  @ApiProperty({type: "string", format: "binary"})
  icon?: string

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  link!: string
}