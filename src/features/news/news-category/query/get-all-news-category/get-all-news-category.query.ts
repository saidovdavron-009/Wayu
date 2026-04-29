import {GetAllNewsCategoryResponse} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category.response";
import {Query} from "@nestjs/cqrs";
import {GetAllNewsCategoryFilters} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category-filters";

export class GetAllNewsCategoryQuery extends Query<GetAllNewsCategoryResponse[]> {
  constructor(public readonly filters: GetAllNewsCategoryFilters) {
    super();
  }
}