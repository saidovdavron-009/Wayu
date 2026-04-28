import {Module} from "@nestjs/common";
import {NewsCategoryController} from "@/features/news/news-category/news-category-controller";
import {CreateNewsCategoryHandler} from "@/features/news/news-category/commands/create-news-category/create-news-category.handler";
import {GetAllNewsCategoryHandler} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category.handler";
import {DeleteNewsCategoryHandler} from "@/features/news/news-category/commands/delete-news-category/delete-news-category.handler";

@Module({
  controllers: [NewsCategoryController],
  providers: [
    CreateNewsCategoryHandler,
    GetAllNewsCategoryHandler,
    DeleteNewsCategoryHandler
  ]
})

export class NewsModule {
}