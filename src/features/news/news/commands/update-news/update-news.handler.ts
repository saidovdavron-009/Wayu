import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateNewsCommand} from "@/features/news/news/commands/update-news/update-news.command";
import {UpdateNewsResponse} from "@/features/news/news/commands/update-news/update-news.response";
import {News} from "@/features/news/news/news.entity";
import {NotFoundException} from "@nestjs/common";
import {plainToInstance} from "class-transformer";

@CommandHandler(UpdateNewsCommand)
export class UpdateNewsHandler implements ICommandHandler<UpdateNewsCommand> {
  async execute(command: UpdateNewsCommand): Promise<UpdateNewsResponse> {
    const news = await News.findOneBy({id: command.id})
    if (!news) {
      throw new NotFoundException('news with given id not found')
    }

    Object.assign(
      news,
      Object.fromEntries(
        Object.entries(([key,value]) => value)
      )
    )

    await News.save(news)
    return plainToInstance(UpdateNewsResponse, news, {excludeExtraneousValues: true})
  }
}