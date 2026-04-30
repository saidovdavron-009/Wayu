import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsResponse} from "@/features/news/news/commands/create-news/create-news.response";
import {CreateNewsCommand} from "@/features/news/news/commands/create-news/create-news.command";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {GetAllNewsResponse} from "@/features/news/news/query/get-all-news/get-all-news.response";
import {GetAllNewsQuery} from "@/features/news/news/query/get-all-news/get-all-news.query";
import {GetAllNewsFilters} from "@/features/news/news/query/get-all-news/get-all-news.filters";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "@/config/multer.config";
import {GetOneNewsResponse} from "@/features/news/news/query/get-one-news/get-one-news.response";
import {GetOneNewsQuery} from "@/features/news/news/query/get-one-news/get-one-news.query";
import {DeleteNewsCommand} from "@/features/news/news/commands/delete-news/delete-news.command";
import {UpdateCountryResponse} from "@/features/common/countries/command/update-country/update-country.response";
import {UpdateCountryCommand} from "@/features/common/countries/command/update-country/update-country.command";
import {UpdateNewsResponse} from "@/features/news/news/commands/update-news/update-news.response";
import {UpdateNewsCommand} from "@/features/news/news/commands/update-news/update-news.command";

@Controller('admin/news')
@ApiTags('News')
export class NewsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @Post()
  @ApiCreatedResponse({type: CreateNewsResponse})
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {
    storage: storageOptions, limits: {
      fileSize: 1024 * 256,
    }
  }))
  async createNews(@Body() command: CreateNewsCommand, @UploadedFile() image: Express.Multer.File) {
    command.image = image.filename
    return await this.commandBus.execute(command)
  }

  @Get()
  @ApiOkResponse({type: [GetAllNewsResponse]})
  async getAllNews(@Query() filters: GetAllNewsFilters) {
    return await this.queryBus.execute(new GetAllNewsQuery(filters))
  }

  @Get(':id')
  @ApiOkResponse({type: [GetOneNewsResponse]})
  async getOneNews(@Param('id', ParseIntPipe) id: number) {
    const query = new GetOneNewsQuery()
    query.id = id
    return await this.queryBus.execute(query)
  }

  @Delete(':id')
  async deleteNews(@Param('id', ParseIntPipe) id: number){
    const cmd = new DeleteNewsCommand()
    cmd.id = id
    return await this.commandBus.execute(cmd)
  }

  @Patch(':id')
  @ApiOkResponse({type: UpdateNewsResponse})
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
  async updateCountry(
    @Param('id', ParseIntPipe) id: number,
    @Body() command: UpdateNewsCommand,
    @UploadedFile() image: Express.Multer.File
  ) {
    command.id = id
    command.image = image?.filename
    return await this.commandBus.execute(command)
  }
}