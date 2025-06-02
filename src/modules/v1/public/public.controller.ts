import { Body, Controller, Post } from '@nestjs/common';
import { CreateCityRequestDto } from './dto/create-city-request.dto';
import { PublicService } from './public.service';

@Controller('api/v1/public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Post('city-request')
  create(@Body() data: CreateCityRequestDto) {
    return this.publicService.create(data);
  }
}
