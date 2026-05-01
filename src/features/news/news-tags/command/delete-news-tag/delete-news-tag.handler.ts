import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateNewsTagCommand} from "@/features/news/news-tags/command/create-news-tag/create-news-tag.command";
import {CreateNewsTagResponse} from "@/features/news/news-tags/command/create-news-tag/create-news-tag.response";
import {News} from "@/features/news/news/news.entity";
import {Tags} from "@/features/common/tags/tags.entity";
import {NotFoundException} from "@nestjs/common";
import {DeleteNewsTagCommand} from "@/features/news/news-tags/command/delete-news-tag/delete-news-tag.command";
import {NewsTag} from "@/features/news/news-tags/news-tags.entity";

@CommandHandler(DeleteNewsTagCommand)
export class DeleteNewsTagHandler implements ICommandHandler<DeleteNewsTagCommand> {
  async execute(cmd: DeleteNewsTagCommand): Promise<void> {
    const news = await News.findOne({relations: ['tags'], where: {id: cmd.newsId}});
    if (!news)
      throw new NotFoundException()
    const tag = await Tags.findOneBy({id: cmd.tagId});
    if (!tag)
      throw new NotFoundException();

    news.tags = news.tags.filter(x => x.id !== tag.id);
    await News.save(news);
  }
}