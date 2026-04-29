import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query} from "@nestjs/common";
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsCategoryCommands} from "./commands/create-news-category/create-news-category.commands";
import {CreateNewsCategoryResponse} from "./commands/create-news-category/create-news-category.response";
import {GetAllNewsCategoryResponse} from "./query/get-all-news-category/get-all-news-category.response";
import {GetAllNewsCategoryQuery} from "./query/get-all-news-category/get-all-news-category.query";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {GetAllNewsCategoryFilters} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category-filters";
import {DeleteNewsCategoryCommand} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.command";
import {GetOneNewsCategoryResponse} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.response";
import {GetOneNewsCategoryQuery} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.query";
import {UpdateNewsCategoryCommand} from "@/features/news/news-category/commands/update-news-category/update-news-category.command";
import {UpdateNewsCategoryResponse} from "@/features/news/news-category/commands/update-news-category/update-news-category.response";

@Controller('admin/news-category')
@ApiTags('News-Category')
export class NewsCategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queriesBus: QueryBus
  ) {
  }

  @Get()
  @ApiOkResponse({type: [GetAllNewsCategoryResponse]})
  async getAllNewsCategory(@Query() filters: GetAllNewsCategoryFilters) {
    return await this.queriesBus.execute(new GetAllNewsCategoryQuery(filters))
  }

  @Get(':id')
  @ApiOkResponse({type: [GetOneNewsCategoryResponse]})
  async getOneNewsCategory(@Param('id', ParseIntPipe) id: number) {
    const cmd = new GetOneNewsCategoryQuery()
    cmd.id = id
    return await this.queriesBus.execute(cmd)
  }

  @Post()
  @ApiCreatedResponse({type: CreateNewsCategoryResponse})
  async createNewsCategory(@Body() command: CreateNewsCategoryCommands) {
    return await this.commandBus.execute(command)
  }

  @Delete(':id')
  async deleteNewsCategory(@Param('id', ParseIntPipe) id: number) {
    const cmd = new DeleteNewsCategoryCommand()
    cmd.id = id;
    return await this.commandBus.execute(cmd);
  }

  @Patch(':id')
  @ApiOkResponse({type : UpdateNewsCategoryResponse})
  async updateNewsCategory(@Param('id', ParseIntPipe) id: number, @Body() command: UpdateNewsCategoryCommand) {
    command.id = id
    return await this.commandBus.execute(command)
  }
}