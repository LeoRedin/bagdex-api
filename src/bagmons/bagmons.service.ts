import { Injectable } from '@nestjs/common';
import { CreateBagmonDto } from './dto/create-bagmon.dto';
import { UpdateBagmonDto } from './dto/update-bagmon.dto';

@Injectable()
export class BagmonsService {
  create(createBagmonDto: CreateBagmonDto) {
    return 'This action adds a new bagmon';
  }

  findAll() {
    return `This action returns all bagmons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bagmon`;
  }

  update(id: number, updateBagmonDto: UpdateBagmonDto) {
    return `This action updates a #${id} bagmon`;
  }

  remove(id: number) {
    return `This action removes a #${id} bagmon`;
  }
}
