import {Body, Controller, Post} from "@nestjs/common";
import {ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {CreatePublicDonationsResponse} from "@/features/finance/donations/public/command/create-donations/create-public-donations.response";
import {CreatePublicDonationCommand} from "@/features/finance/donations/public/command/create-donations/create-public-donation.command";
import {CreatePublicDonationsRequest} from "@/features/finance/donations/public/command/create-donations/create-public-donations.request";

@Controller('admin/donations')
@ApiTags('Donations-admin')
export class DonationsPublicController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @Post()
  @ApiCreatedResponse({type: CreatePublicDonationsResponse})
  async createDonations(@Body() payload: CreatePublicDonationsRequest) {
    let cmd = new CreatePublicDonationCommand(
      payload.amount,
      payload.fullName,
      payload.date,
      payload.paidBy
    )
    return await this.commandBus.execute(cmd)
  }
}