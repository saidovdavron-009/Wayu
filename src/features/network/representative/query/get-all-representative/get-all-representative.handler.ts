import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetAllRepresentativeQuery} from "@/features/network/representative/query/get-all-representative/get-all-representative.query";
import {GetAllRepresentativeResponse} from "@/features/network/representative/query/get-all-representative/get-all-representative.response";
import {Representatives} from "@/features/network/representative/representatives.entity";
import {plainToInstance} from "class-transformer";

@QueryHandler(GetAllRepresentativeQuery)
export class GetAllRepresentativeHandler implements IQueryHandler<GetAllRepresentativeQuery> {
  async execute(query: GetAllRepresentativeQuery): Promise<GetAllRepresentativeResponse[]> {
    const take = query.filters.size ?? 10;
    const currentPage = query.filters.page ?? 1;
    const skip = (currentPage - 1) * take;

    const representatives = await Representatives.find({skip, take});
    return plainToInstance(GetAllRepresentativeResponse, representatives, {excludeExtraneousValues: true});
  }
}
