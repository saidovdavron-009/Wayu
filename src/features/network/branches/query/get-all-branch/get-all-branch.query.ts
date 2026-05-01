import {Query} from "@nestjs/cqrs";
import {GetAllBranchResponse} from "@/features/network/branches/query/get-all-branch/get-all-branch.response";
import {GetAllBranchFilters} from "@/features/network/branches/query/get-all-branch/get-all-branch.filters";

export class GetAllBranchQuery extends Query<GetAllBranchResponse[]> {
  constructor(public readonly filters: GetAllBranchFilters) {
    super();
  }
}
