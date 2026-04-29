import {Body, Controller, Get, Param, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {GetAllCountryResponse} from "@/features/common/countries/query/get-all-country/get-all-country.response";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {CreateCountryResponse} from "@/features/common/countries/command/create-country/create-country.response";
import {CreateCountryCommand} from "@/features/common/countries/command/create-country/create-country.command";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "@/config/multer.config";
import {GetAllCountryQuery} from "@/features/common/countries/query/get-all-country/get-all-country.query";
import {GetAllCountryFilters} from "@/features/common/countries/query/get-all-country/get-all-country.filters";
import {GetOneCountryResponse} from "@/features/common/countries/query/get-one-country/get-one-country.response";
import {GetOneNewsCategoryQuery} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.query";

@Controller('admin/country')
@ApiTags('Country')
export class CountryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @Get()
  @ApiOkResponse({type: [GetAllCountryResponse]})
  async getAllCountry(@Query() filters: GetAllCountryFilters) {
    return await this.queryBus.execute(new GetAllCountryQuery(filters))
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('flag', {
    storage: storageOptions, limits: {
      fileSize: 1024 * 256,
    }
  }))
  @ApiCreatedResponse({type: CreateCountryResponse})
  async createCountry(@Body() command: CreateCountryCommand, @UploadedFile() flag: Express.Multer.File) {
    command.flag = flag.filename
    return await this.commandBus.execute(command)
  }

  @Get(':id')
  @ApiOkResponse({type: [GetOneCountryResponse]})
  async getOneCountry(@Param('id', ParseIntPipe) id: number) {
    const query = new GetOneNewsCategoryQuery()
    query.id = id
    return await this.queryBus.execute(query)
  }
}