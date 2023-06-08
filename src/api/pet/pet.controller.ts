import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Pet as api } from '../api-interface';

@Controller('v3/pet')
export class PetController {
  @Post()
  async addPet(
    @Body() body: api.AddPet.RequestBody,
  ): Promise<api.AddPet.ResponseBody> {
    return {} as api.AddPet.ResponseBody;
  }

  @Get('findByStatus')
  async findPetsByStatus(
    @Query() query: api.FindPetsByStatus.RequestQuery,
  ): Promise<api.FindPetsByStatus.ResponseBody> {
    return {} as api.FindPetsByStatus.ResponseBody;
  }

  @Get(':petId')
  async getPetById(
    @Param() params: api.GetPetById.RequestParams,
  ): Promise<api.GetPetById.ResponseBody> {
    return {} as api.GetPetById.ResponseBody;
  }
}
