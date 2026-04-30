import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {DeleteNewsCommand} from "@/features/news/news/commands/delete-news/delete-news.command";
import {News} from "@/features/news/news/news.entity";
import {NotFoundException} from "@nestjs/common";

@CommandHandler(DeleteNewsCommand)
export class DeleteNewsHandler implements ICommandHandler<DeleteNewsCommand> {
  async execute(cmd: DeleteNewsCommand): Promise<void> {
    const news = await News.findOneBy({id : cmd.id})
    if (!news) {
      throw new NotFoundException('news with given id not found')
    }

    await News.delete(cmd.id)
  }
}