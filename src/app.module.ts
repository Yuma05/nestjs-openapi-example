import { Module } from '@nestjs/common';
import { PetModule } from './api/pet/pet.module';

@Module({
  imports: [PetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
