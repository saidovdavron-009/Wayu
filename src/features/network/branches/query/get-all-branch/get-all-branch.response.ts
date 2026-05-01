import {Expose, Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {GetAllCountryResponse} from "@/features/common/countries/query/get-all-country/get-all-country.response";
import {GetAllRepresentativeResponse} from "@/features/network/representative/query/get-all-representative/get-all-representative.response";

export class GetAllBranchResponse {
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @ApiProperty()
  city!: string

  @Expose()
  @ApiProperty()
  latitude!: number

  @Expose()
  @ApiProperty()
  longitude!: number

  @Expose()
  @ApiProperty()
  phoneNumber!: string

  @Expose()
  @ApiProperty()
  @Type(() => GetAllCountryResponse)
  country!: GetAllCountryResponse

  @Expose()
  @ApiProperty()
  @Type(() => GetAllRepresentativeResponse)
  representative!: GetAllRepresentativeResponse

  @Expose()
  @ApiProperty()
  createdAt!: string

  @Expose()
  @ApiProperty()
  updatedAt?: string
}
