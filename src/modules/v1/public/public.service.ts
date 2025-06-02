import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCityRequestDto } from './dto/create-city-request.dto';

@Injectable()
export class PublicService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCityRequestDto) {
    console.log({ data });
    const existingRequest = await this.prisma.request.findFirst({
      where: {
        email: data.email,
        city_name: data.city_name,
        state: data.state,
      },
    });

    if (existingRequest) {
      throw new ConflictException('A request for this city already exists');
    }

    return this.prisma.request.create({
      data: {
        full_name: data.full_name,
        email: data.email,
        city_name: data.city_name,
        state: data.state,
        cnpj: data.cnpj,
      },
    });
  }
}
