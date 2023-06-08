import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PetModule } from './api/pet/pet.module';
import { join } from 'path';
import * as OpenApiValidator from 'express-openapi-validator';

@Module({
  imports: [PetModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ...OpenApiValidator.middleware({
          apiSpec: join(__dirname, './petstore.yaml'),
          validateFormats: 'full',
        }),
      )
      .forRoutes('*');
  }
}
