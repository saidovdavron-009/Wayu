import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateCountryCommand} from "@/features/common/countries/command/update-country/update-country.command";
import {UpdateCountryResponse} from "@/features/common/countries/command/update-country/update-country.response";
import {Countries} from "@/features/common/countries/countries.entity";
import {NotFoundException} from "@nestjs/common";
import {plainToInstance} from "class-transformer";

@CommandHandler(UpdateCountryCommand)
export class UpdateCountryHandler implements ICommandHandler<UpdateCountryCommand> {
  async execute(command: UpdateCountryCommand): Promise<UpdateCountryResponse> {
    const country = await Countries.findOneBy({id: command.id})
    if (!country) {
      throw new NotFoundException('country with given id not found')
    }

    Object.assign(
      country,
      Object.fromEntries(
        Object.entries(command).filter(([key, value]) => value)
      )
    )

    await Countries.save(country)
    return plainToInstance(UpdateCountryResponse, country, {excludeExtraneousValues: true})
  }
}