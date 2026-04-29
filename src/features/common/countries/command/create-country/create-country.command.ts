import {Allow, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Command} from "@nestjs/cqrs";
import {CreateCountryResponse} from "@/features/common/countries/command/create-country/create-country.response";

export class CreateCountryCommand extends Command<CreateCountryResponse>{
  @IsString()
  @ApiProperty()
  @MaxLength(64)
  title!: string;

  @Allow()
  @ApiProperty({type : "string",format: 'binary'})
  flag!: string;
}