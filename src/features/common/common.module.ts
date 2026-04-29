import {Module} from "@nestjs/common";
import {CountryController} from "@/features/common/countries/country.controller";
import {GetAllCountryHandler} from "@/features/common/countries/query/get-all-country/get-all-country.handler";
import {CreateCountryHandler} from "@/features/common/countries/command/create-country/create-country.handler";

@Module({
  controllers: [CountryController],
  providers: [
    GetAllCountryHandler,
    CreateCountryHandler
  ]
})

export class CommonModule{}