import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import Joi from 'joi'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
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
  ],
})

export class AppModule {}