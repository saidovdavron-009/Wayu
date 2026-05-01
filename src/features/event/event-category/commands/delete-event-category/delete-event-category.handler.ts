import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {NotFoundException} from "@nestjs/common";
import {DeleteEventCategoryCommand} from "@/features/event/event-category/commands/delete-event-category/delete-event-category.command";
import {EventCategories} from "@/features/event/event-category/event-category.entity";

@CommandHandler(DeleteEventCategoryCommand)
export class DeleteEventCategoryHandler implements ICommandHandler<DeleteEventCategoryCommand> {
  async execute(cmd: DeleteEventCategoryCommand): Promise<void> {
    const category = await EventCategories.findOneBy({id: cmd.id});

    if (!category)
      throw new NotFoundException("Event category with given id not found");

    await EventCategories.delete(cmd.id);
  }
}
