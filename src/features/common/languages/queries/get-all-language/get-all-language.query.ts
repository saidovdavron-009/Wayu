import {GetAllNewsCategoryResponse} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category.response";
import {Query} from "@nestjs/cqrs";
import {GetAllNewsCategoryFilters} from "@/features/news/news-category/query/get-all-news-category/get-all-news-category-filters";
import {GetAllLanguageResponse} from "@/features/common/languages/queries/get-all-language/get-all-language.response";
import {GetAllLanguageFilters} from "@/features/common/languages/queries/get-all-language/get-all-language.filters";

export class GetAllLanguageQuery extends Query<GetAllLanguageResponse[]> {
  constructor(public readonly filters: GetAllLanguageFilters) {
    super();
  }
}