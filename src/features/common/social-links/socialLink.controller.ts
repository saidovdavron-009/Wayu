import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "@/config/multer.config";
import {CreateSocialLinkResponse} from "@/features/common/social-links/command/create-social-link/create-social-link.response";
import {CreateSocialLinkCommand} from "@/features/common/social-links/command/create-social-link/create-social-link.command";
import {DeleteSocialLinkCommand} from "@/features/common/social-links/command/delete-social-link/delete-social.link.command";
import {UpdateSocialLinkResponse} from "@/features/common/social-links/command/update-social-link/update-social-link.response";
import {UpdateSocialLinkCommand} from "@/features/common/social-links/command/update-social-link/update-social-link.command";
import {GetAllSocialLinkResponse} from "@/features/common/social-links/query/get-all-social-link/get-all-social-link.response";
import {GetAllSocialLinkFilters} from "@/features/common/social-links/query/get-all-social-link/get-all-social-link.filters";
import {GetAllSocialLinkQuery} from "@/features/common/social-links/query/get-all-social-link/get-all-social-link.query";
import {GetOneSocialLinkResponse} from "@/features/common/social-links/query/get-one-social-link/get-one-social-link.response";
import {GetOneSocialLinkQuery} from "@/features/common/social-links/query/get-one-social-link/get-one-social-link.query";

@Controller('admin/social-link')
@ApiTags('Social-Link')
export class SocialLinkController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @Get()
  @ApiOkResponse({type: [GetAllSocialLinkResponse]})
  async getAllSocialLink(@Query() filters: GetAllSocialLinkFilters) {
    return await this.queryBus.execute(new GetAllSocialLinkQuery(filters))
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon', {
    storage: storageOptions, limits: {
      fileSize: 1024 * 256,
    }
  }))
  @ApiCreatedResponse({type: CreateSocialLinkResponse})
  async createSocialLink(@Body() command: CreateSocialLinkCommand, @UploadedFile() icon: Express.Multer.File) {
    command.icon = icon.filename
    return await this.commandBus.execute(command)
  }

  @Get(':id')
  @ApiOkResponse({type: [GetOneSocialLinkResponse]})
  async getOneSocialLink(@Param('id', ParseIntPipe) id: number) {
    const query = new GetOneSocialLinkQuery()
    query.id = id
    return await this.queryBus.execute(query)
  }

  @Delete(':id')
  async deleteSocialLink(@Param('id', ParseIntPipe) id: number) {
    const cmd = new DeleteSocialLinkCommand()
    cmd.id = id
    return await this.commandBus.execute(cmd)
  }

  @Patch(':id')
  @ApiOkResponse({type: UpdateSocialLinkResponse})
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon', {storage: storageOptions}))
  async updateSocialLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() command: UpdateSocialLinkCommand,
    @UploadedFile() icon: Express.Multer.File
  ) {
    command.id = id
    command.icon = icon.filename
    return await this.commandBus.execute(command)
  }
}