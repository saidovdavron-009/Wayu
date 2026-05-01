import {Query} from "@nestjs/cqrs";
import {GetAllFaqResponse} from "@/features/support/faqs/query/get-all-faq/get-all-faq.response";
import {GetAllFaqFilters} from "@/features/support/faqs/query/get-all-faq/get-all-faq.filters";

export class GetAllFaqQuery extends Query<GetAllFaqResponse[]> {
  constructor(public filters: GetAllFaqFilters) {
    super();
  }
}
