import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BagmonsService } from './bagmons.service';
import { CreateBagmonDto } from './dto/create-bagmon.dto';
import { UpdateBagmonDto } from './dto/update-bagmon.dto';

@Controller('bagmons')
export class BagmonsController {
  constructor(private readonly bagmonsService: BagmonsService) {}

  @Post()
  create(@Body() createBagmonDto: CreateBagmonDto) {
    return this.bagmonsService.create(createBagmonDto);
  }

  @Get()
  findAll() {
    return this.bagmonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bagmonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBagmonDto: UpdateBagmonDto) {
    return this.bagmonsService.update(+id, updateBagmonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bagmonsService.remove(+id);
  }
}
