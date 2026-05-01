import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {FileInterceptor} from "@nestjs/platform-express";
import {storageOptions} from "@/config/multer.config";
import fs from "fs";
import {CreateRepresentativeRequest} from "@/features/network/representative/command/create-representative/create-representative.request";
import {CreateRepresentativeCommand} from "@/features/network/representative/command/create-representative/create-representative.command";
import {CreateRepresentativeResponse} from "@/features/network/representative/command/create-representative/create-representative.response";
import {UpdateRepresentativeRequest} from "@/features/network/representative/command/update-representative/update-representative.request";
import {UpdateRepresentativeCommand} from "@/features/network/representative/command/update-representative/update-representative.command";
import {UpdateRepresentativeResponse} from "@/features/network/representative/command/update-representative/update-representative.response";
import {DeleteRepresentativeCommand} from "@/features/network/representative/command/delete-representative/delete-representative.command";
import {GetAllRepresentativeQuery} from "@/features/network/representative/query/get-all-representative/get-all-representative.query";
import {GetAllRepresentativeFilters} from "@/features/network/representative/query/get-all-representative/get-all-representative.filters";
import {GetAllRepresentativeResponse} from "@/features/network/representative/query/get-all-representative/get-all-representative.response";
import {GetOneRepresentativeQuery} from "@/features/network/representative/query/get-one-representative/get-one-representative.request";
import {GetOneRepresentativeResponse} from "@/features/network/representative/query/get-one-representative/get-one-representative.response";

@Controller('admin/representative')
@ApiTags('Representative')
export class RepresentativeController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiCreatedResponse({type: CreateRepresentativeResponse})
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {
    storage: storageOptions,
    limits: {fileSize: 1024 * 1024},
  }))
  async createRepresentative(
    @Body() payload: CreateRepresentativeRequest,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const cmd = new CreateRepresentativeCommand(
      payload.fullName,
      image,
      payload.email,
      payload.phoneNumber,
      payload.resume,
    );
    try {
      return await this.commandBus.execute(cmd);
    } catch (exc) {
      if (fs.existsSync(image.path)) fs.rmSync(image.path);
      throw exc;
    }
  }

  @Get()
  @ApiOkResponse({type: [GetAllRepresentativeResponse]})
  async getAllRepresentatives(@Query() filters: GetAllRepresentativeFilters) {
    return await this.queryBus.execute(new GetAllRepresentativeQuery(filters));
  }

  @Get(':id')
  @ApiOkResponse({type: GetOneRepresentativeResponse})
  async getOneRepresentative(@Param('id', ParseIntPipe) id: number) {
    const query = new GetOneRepresentativeQuery();
    query.id = id;
    return await this.queryBus.execute(query);
  }

  @Delete(':id')
  async deleteRepresentative(@Param('id', ParseIntPipe) id: number) {
    return await this.commandBus.execute(new DeleteRepresentativeCommand(id));
  }

  @Patch(':id')
  @ApiOkResponse({type: UpdateRepresentativeResponse})
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {storage: storageOptions}))
  async updateRepresentative(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateRepresentativeRequest,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const cmd = new UpdateRepresentativeCommand(
      id,
      payload.fullName,
      image,
      payload.email,
      payload.phoneNumber,
      payload.resume,
    );
    try {
      return await this.commandBus.execute(cmd);
    } catch (exc) {
      if (image && fs.existsSync(image.path)) fs.rmSync(image.path);
      throw exc;
    }
  }
}
