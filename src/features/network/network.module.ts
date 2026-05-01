import {Module} from "@nestjs/common";
import {RepresentativeController} from "@/features/network/representative/representative.controller";
import {CreateRepresentativeHandler} from "@/features/network/representative/command/create-representative/create-representative.handler";
import {UpdateRepresentativeHandler} from "@/features/network/representative/command/update-representative/update-representative.handler";
import {DeleteRepresentativeHandler} from "@/features/network/representative/command/delete-representative/delete-representative.handler";
import {GetAllRepresentativeHandler} from "@/features/network/representative/query/get-all-representative/get-all-representative.handler";
import {GetOneRepresentativeHandler} from "@/features/network/representative/query/get-one-representative/get-one-representative.handler";
import {BranchController} from "@/features/network/branches/branch.controller";
import {CreateBranchHandler} from "@/features/network/branches/command/create-branch/create-branch.handler";
import {UpdateBranchHandler} from "@/features/network/branches/command/update-branch/update-branch.handler";
import {DeleteBranchHandler} from "@/features/network/branches/command/delete-branch/delete-branch.handler";
import {GetAllBranchHandler} from "@/features/network/branches/query/get-all-branch/get-all-branch.handler";
import {GetOneBranchHandler} from "@/features/network/branches/query/get-one-branch/get-one-branch.handler";
import {InstagramPostController} from "@/features/network/instagram-posts/instagram-post.controller";
import {CreateInstagramPostHandler} from "@/features/network/instagram-posts/command/create-instagram-post/create-instagram-post.handler";
import {UpdateInstagramPostHandler} from "@/features/network/instagram-posts/command/update-instagram-post/update-instagram-post.handler";
import {DeleteInstagramPostHandler} from "@/features/network/instagram-posts/command/delete-instagram-post/delete-instagram-post.handler";
import {GetAllInstagramPostHandler} from "@/features/network/instagram-posts/query/get-all-instagram-post/get-all-instagram-post.handler";
import {GetOneInstagramPostHandler} from "@/features/network/instagram-posts/query/get-one-instagram-post/get-one-instagram-post.handler";
import {EventCategoryController} from "@/features/event/event-category/event-category.controller";
import {EventController} from "@/features/event/event/event.controller";
import {CreateEventCategoryHandler} from "@/features/event/event-category/commands/create-event-category/create-event-category.handler";
import {UpdateEventCategoryHandler} from "@/features/event/event-category/commands/update-event-category/update-event-category.handler";
import {DeleteEventCategoryHandler} from "@/features/event/event-category/commands/delete-event-category/delete-event-category.handler";
import {GetAllEventCategoryHandler} from "@/features/event/event-category/query/get-all-event-category/get-all-event-category.handler";
import {GetOneEventCategoryHandler} from "@/features/event/event-category/query/get-one-event-category/get-one-event-category.handler";
import {CreateEventHandler} from "@/features/event/event/commands/create-event/create-event.handler";
import {UpdateEventHandler} from "@/features/event/event/commands/update-event/update-event.handler";
import {DeleteEventHandler} from "@/features/event/event/commands/delete-event/delete-event.handler";
import {GetAllEventHandler} from "@/features/event/event/query/get-all-event/get-all-event.handler";
import {GetOneEventHandler} from "@/features/event/event/query/get-one-event/get-one-event.handler";

@Module({
  controllers: [
    RepresentativeController,
    BranchController,
    EventCategoryController,
    EventController,
    InstagramPostController,
  ],
  providers: [
    CreateRepresentativeHandler,
    UpdateRepresentativeHandler,
    DeleteRepresentativeHandler,
    GetAllRepresentativeHandler,
    GetOneRepresentativeHandler,
    CreateBranchHandler,
    UpdateBranchHandler,
    DeleteBranchHandler,
    GetAllBranchHandler,
    GetOneBranchHandler,
    CreateEventCategoryHandler,
    UpdateEventCategoryHandler,
    DeleteEventCategoryHandler,
    GetAllEventCategoryHandler,
    GetOneEventCategoryHandler,
    CreateEventHandler,
    UpdateEventHandler,
    DeleteEventHandler,
    GetAllEventHandler,
    GetOneEventHandler,
    CreateInstagramPostHandler,
    UpdateInstagramPostHandler,
    DeleteInstagramPostHandler,
    GetAllInstagramPostHandler,
    GetOneInstagramPostHandler,
  ]
})
export class NetworkModule {}
