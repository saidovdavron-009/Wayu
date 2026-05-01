import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetOneRepresentativeQuery} from "@/features/network/representative/query/get-one-representative/get-one-representative.request";
import {GetOneRepresentativeResponse} from "@/features/network/representative/query/get-one-representative/get-one-representative.response";
import {Representatives} from "@/features/network/representative/representatives.entity";
import {NotFoundException} from "@nestjs/common";
import {plainToInstance} from "class-transformer";

@QueryHandler(GetOneRepresentativeQuery)
export class GetOneRepresentativeHandler implements IQueryHandler<GetOneRepresentativeQuery> {
  async execute(query: GetOneRepresentativeQuery): Promise<GetOneRepresentativeResponse> {
    const representative = await Representatives.findOneBy({id: query.id});
    if (!representative) {
      throw new NotFoundException("Representative with given id not found");
    }
    return plainToInstance(GetOneRepresentativeResponse, representative, {excludeExtraneousValues: true});
  }
}
