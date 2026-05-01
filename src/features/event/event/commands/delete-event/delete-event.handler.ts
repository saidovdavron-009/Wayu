import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {NotFoundException} from "@nestjs/common";
import {DeleteEventCommand} from "@/features/event/event/commands/delete-event/delete-event.command";
import {Events} from "@/features/event/event/events.entity";

@CommandHandler(DeleteEventCommand)
export class DeleteEventHandler implements ICommandHandler<DeleteEventCommand> {
  async execute(cmd: DeleteEventCommand): Promise<void> {
    const event = await Events.findOneBy({id: cmd.id});

    if (!event)
      throw new NotFoundException("Event with given id not found");

    await Events.delete(cmd.id);
  }
}
