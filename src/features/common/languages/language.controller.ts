import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query} from "@nestjs/common";
import {CreateNewsCategoryCommands} from "@/features/news/news-category/commands/create-news-category/create-news-category.commands";
import {CreateLanguageResponse} from "@/features/common/languages/commands/create-language/create-language.response";
import {GetAllLanguageResponse} from "@/features/common/languages/queries/get-all-language/get-all-language.response";
import {GetAllLanguageFilters} from "@/features/common/languages/queries/get-all-language/get-all-language.filters";
import {GetAllLanguageQuery} from "@/features/common/languages/queries/get-all-language/get-all-language.query";
import {CreateLanguageCommand} from "@/features/common/languages/commands/create-language/create-language.command";
import {GetOneNewsCategoryResponse} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.response";
import {GetOneNewsCategoryQuery} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.query";
import {GetOneLanguageResponse} from "@/features/common/languages/queries/get-one-language/get-one-language.response";
import {GetOneLanguageQuery} from "@/features/common/languages/queries/get-one-language/get-one-language.query";
import {DeleteNewsCategoryCommand} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.command";
import {DeleteLanguageCommand} from "@/features/common/languages/commands/delete-language/delete-language.command";
import {UpdateNewsCategoryResponse} from "@/features/news/news-category/commands/update-news-category/update-news-category.response";
import {UpdateNewsCategoryCommand} from "@/features/news/news-category/commands/update-news-category/update-news-category.command";
import {UpdateLanguageResponse} from "@/features/common/languages/commands/update-language/update-language.response";
import {UpdateLanguageCommand} from "@/features/common/languages/commands/update-language/update-language.command";

@Controller('admin/language')
@ApiTags('Language')
export class LanguageController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queriesBus: QueryBus
  ) {
  }

  @Post()
  @ApiCreatedResponse({type: CreateLanguageResponse})
  async createLanguage(@Body() command: CreateLanguageCommand) {
    return await this.commandBus.execute(command)
  }

  @Get()
  @ApiOkResponse({type: [GetAllLanguageResponse]})
  async getAllLanguage(@Query() filters: GetAllLanguageFilters) {
    return await this.queriesBus.execute(new GetAllLanguageQuery(filters))
  }

  @Get(':id')
  @ApiOkResponse({type: [GetOneLanguageResponse]})
  async getOneLanguage(@Param('id', ParseIntPipe) id: number) {
    const query = new GetOneLanguageQuery()
    query.id = id
    return await this.queriesBus.execute(query)
  }

  @Delete(':id')
  async deleteLanguage(@Param('id', ParseIntPipe) id: number) {
    const cmd = new DeleteLanguageCommand()
    cmd.id = id;
    return await this.commandBus.execute(cmd);
  }

  @Patch(':id')
  @ApiOkResponse({type: UpdateLanguageResponse})
  async updateLanguage(@Param('id', ParseIntPipe) id: number, @Body() command: UpdateLanguageCommand) {
    command.id = id
    return await this.commandBus.execute(command)
  }
}