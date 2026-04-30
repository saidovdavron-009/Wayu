import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateNewsCommand} from "@/features/news/news/commands/create-news/create-news.command";
import {CreateNewsResponse} from "@/features/news/news/commands/create-news/create-news.response";
import {News} from "@/features/news/news/news.entity";
import {plainToInstance} from "class-transformer";

@CommandHandler(CreateNewsCommand)
export class CreateNewsHandler implements ICommandHandler<CreateNewsCommand> {
  async execute(command: CreateNewsCommand): Promise<CreateNewsResponse> {
    const news = News.create(command)
    await News.save(news)
    return plainToInstance(CreateNewsResponse, news, {excludeExtraneousValues: true})
  }
}