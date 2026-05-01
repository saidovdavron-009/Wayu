import {Query} from "@nestjs/cqrs";
import {GetAllQuestionResponse} from "@/features/support/questions/query/get-all-question/get-all-question.response";
import {GetAllQuestionFilters} from "@/features/support/questions/query/get-all-question/get-all-question.filters";

export class GetAllQuestionQuery extends Query<GetAllQuestionResponse[]> {
  constructor(public readonly filters: GetAllQuestionFilters) {
    super();
  }
}
