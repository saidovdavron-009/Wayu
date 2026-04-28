import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query} from "@nestjs/common";
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsCategoryCommands} from "./commands/create-news-category/create-news-category.commands";
import {CreateNewsCategoryResponse} from "./commands/create-news-category/create-news-category.response";
import {GetAllNewsCategoryResponse} from "./query/get-all-news-category/get-all-news-category.response";
import {GetAllNewsCategoryQuery} from "./query/get-all-news-category/get-all-news-category.query";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {GetAllNewsCategoryFilters} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category-filters";
import {DeleteNewsCategoryCommand} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.command";
import {DeleteNewsCategoryResponse} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.response";

@Controller('news-category/admin')
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

  @Post()
  @ApiCreatedResponse({type: CreateNewsCategoryResponse})
  async createNewsCategory(@Body() command: CreateNewsCategoryCommands) {
    return await this.commandBus.execute(command)
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteNewsCategoryResponse })
  async deleteNewsCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.commandBus.execute(new DeleteNewsCategoryCommand(id));
  }
}