import {Module} from "@nestjs/common";
import {NewsCategoryController} from "@/features/news/news-category/news-category-controller";
import {CreateNewsCategoryHandler} from "@/features/news/news-category/commands/create-news-category/create-news-category.handler";
import {GetAllNewsCategoryHandler} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category.handler";
import {DeleteNewsCategoryHandler} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.handler";
import {GetOneNewsCategoryHandler} from "@/features/news/news-category/query/get-one-news-category/get-one-news-category.handler";
import {UpdateNewsCategoryHandler} from "@/features/news/news-category/commands/update-news-category/update-news-category.handler";
import {CreateNewsHandler} from "@/features/news/news/commands/create-news/create-news.handler";
import {NewsController} from "@/features/news/news/news.controller";
import {GetAllNewsHandler} from "@/features/news/news/query/get-all-news/get-all-news.handler";
import {GetOneNewsHandler} from "@/features/news/news/query/get-one-news/get-one-news.handler";
import {DeleteNewsHandler} from "@/features/news/news/commands/delete-news/delete-news.handler";
import {UpdateNewsHandler} from "@/features/news/news/commands/update-news/update-news.handler";
import {NewsTagsController} from "@/features/news/news-tags/news-tags.controller";
import {CreateNewsTagHandler} from "@/features/news/news-tags/command/create-news-tag/create-news-tag.handler";
import {DeleteNewsTagHandler} from "@/features/news/news-tags/command/delete-news-tag/delete-news-tag.handler";

@Module({
  controllers: [
    NewsCategoryController,
    NewsController,
    NewsTagsController
  ],
  providers: [
    CreateNewsCategoryHandler,
    GetAllNewsCategoryHandler,
    DeleteNewsCategoryHandler,
    GetOneNewsCategoryHandler,
    UpdateNewsCategoryHandler,
    CreateNewsHandler,
    GetAllNewsHandler,
    GetOneNewsHandler,
    DeleteNewsHandler,
    UpdateNewsHandler,
    CreateNewsTagHandler,
    DeleteNewsTagHandler
  ]
})

export class NewsModule {
}