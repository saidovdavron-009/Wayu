import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {NotFoundException} from "@nestjs/common";
import {DeleteSocialLinkCommand} from "@/features/common/social-links/command/delete-social-link/delete-social.link.command";
import {SocialLinks} from "@/features/common/social-links/socialLinks.entity";

@CommandHandler(DeleteSocialLinkCommand)
export class DeleteSocialLinkHandler implements ICommandHandler<DeleteSocialLinkCommand>{
  async execute(cmd: DeleteSocialLinkCommand): Promise<void>{
    const socialLink = await SocialLinks.findOneBy({id: cmd.id})
    if(!socialLink){
      throw new NotFoundException('link with given if not found')
    }

    await SocialLinks.remove(socialLink)
  }
}