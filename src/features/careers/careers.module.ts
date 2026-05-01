import {Module} from "@nestjs/common";
import {VacancyController} from "@/features/careers/vacancy/vacancy.controller";
import {CreateVacancyHandler} from "@/features/careers/vacancy/command/create-vacancy/create-vacancy.handler";
import {UpdateVacancyHandler} from "@/features/careers/vacancy/command/update-vacancy/update-vacancy.handler";
import {DeleteVacancyHandler} from "@/features/careers/vacancy/command/delete-vacancy/delete-vacancy.handler";
import {GetAllVacancyHandler} from "@/features/careers/vacancy/query/get-all-vacancy/get-all-vacancy.handler";
import {GetOneVacancyHandler} from "@/features/careers/vacancy/query/get-one-vacancy/get-one-vacancy.handler";
import {ApplicationController} from "@/features/careers/application/application.controller";
import {CreateApplicationHandler} from "@/features/careers/application/commands/create-application/create-application.handler";
import {UpdateApplicationHandler} from "@/features/careers/application/commands/update-application/update-application.handler";
import {DeleteApplicationHandler} from "@/features/careers/application/commands/delete-application/delete-application.handler";
import {GetAllApplicationHandler} from "@/features/careers/application/query/get-all-application/get-all-application.handler";
import {GetOneApplicationHandler} from "@/features/careers/application/query/get-one-application/get-one-application.handler";

@Module({
  controllers: [
    VacancyController,
    ApplicationController,
  ],
  providers: [
    CreateVacancyHandler,
    UpdateVacancyHandler,
    DeleteVacancyHandler,
    GetAllVacancyHandler,
    GetOneVacancyHandler,
    CreateApplicationHandler,
    UpdateApplicationHandler,
    DeleteApplicationHandler,
    GetAllApplicationHandler,
    GetOneApplicationHandler,
  ]
})
export class CareersModule {}
