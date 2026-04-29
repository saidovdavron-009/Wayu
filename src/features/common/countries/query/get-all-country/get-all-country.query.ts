import {Query} from "@nestjs/cqrs";
import {GetAllCountryFilters} from "@/features/common/countries/query/get-all-country/get-all-country.filters";
import {GetAllCountryResponse} from "@/features/common/countries/query/get-all-country/get-all-country.response";

export class GetAllCountryQuery extends Query<GetAllCountryResponse[]> {
  constructor(public readonly filters: GetAllCountryFilters) {
    super();
  }
}