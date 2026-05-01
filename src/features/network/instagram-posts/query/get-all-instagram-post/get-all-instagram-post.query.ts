import {Query} from "@nestjs/cqrs";
import {GetAllInstagramPostResponse} from "@/features/network/instagram-posts/query/get-all-instagram-post/get-all-instagram-post.response";
import {GetAllInstagramPostFilters} from "@/features/network/instagram-posts/query/get-all-instagram-post/get-all-instagram-post.filters";

export class GetAllInstagramPostQuery extends Query<GetAllInstagramPostResponse[]> {
  constructor(public readonly filters: GetAllInstagramPostFilters) {
    super();
  }
}
