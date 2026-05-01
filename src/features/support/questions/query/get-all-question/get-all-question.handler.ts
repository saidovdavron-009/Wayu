import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetAllQuestionQuery} from "@/features/support/questions/query/get-all-question/get-all-question.query";
import {GetAllQuestionResponse} from "@/features/support/questions/query/get-all-question/get-all-question.response";
import {Questions} from "@/features/support/questions/questions.entity";
import {plainToInstance} from "class-transformer";

@QueryHandler(GetAllQuestionQuery)
export class GetAllQuestionHandler implements IQueryHandler<GetAllQuestionQuery> {
  async execute(query: GetAllQuestionQuery): Promise<GetAllQuestionResponse[]> {
    const take = query.filters.size ?? 10;
    const currentPage = query.filters.page ?? 1;
    const skip = (currentPage - 1) * take;

    const questions = await Questions.find({skip, take});
    return plainToInstance(GetAllQuestionResponse, questions, {excludeExtraneousValues: true});
  }
}
