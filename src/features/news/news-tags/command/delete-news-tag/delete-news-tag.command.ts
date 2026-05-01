import {Command} from "@nestjs/cqrs";
import {CreateNewsTagResponse} from "@/features/news/news-tags/command/create-news-tag/create-news-tag.response";

export class DeleteNewsTagCommand extends Command<void>{
  constructor(
    public newsId: number,
    public tagId: number
  ) {
    super();
  }
}