import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config';
import Joi from 'joi'
import {ConfigModule} from '@nestjs/config';
import {NewsModule} from "@/features/news/news.module";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_URL: Joi.string().required(),
        DEFAULT_DB_URL: Joi.string().required(),
        TEST_DB_URL: Joi.string().required(),
        DEFAULT_SIZE: Joi.number().required(),
        DEFAULT_PAGE: Joi.number().required(),
        BASE_URL: Joi.string().required()
      }),
    }),
    NewsModule
  ],
})

export class AppModule {
}