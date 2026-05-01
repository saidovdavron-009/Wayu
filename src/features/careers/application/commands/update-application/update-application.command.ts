import {Command} from "@nestjs/cqrs";
import {UpdateApplicationResponse} from "@/features/careers/application/commands/update-application/update-application.response";
import {ApplicationStatus} from "@/core/enum/enum";

export class UpdateApplicationCommand extends Command<UpdateApplicationResponse> {
  constructor(
    public id: number,
    public fullName?: string,
    public phoneNumber?: string,
    public email?: string,
    public vacancyId?: number,
    public resume?: Express.Multer.File,
    public status?: ApplicationStatus,
  ) {
    super();
  }
}
