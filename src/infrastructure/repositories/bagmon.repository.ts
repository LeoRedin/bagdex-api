import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagmonModel } from 'src/domain/model/bagmon';
import { IBagmonRepository } from 'src/domain/repositories/bagmon';
import { BagmonEntity } from '../entity/bagmon';

@Injectable()
export class DatabaseBagmonRepository implements IBagmonRepository {
  constructor(
    @InjectRepository(BagmonEntity)
    private readonly bagmonEntityRepository: Repository<BagmonEntity>,
  ) {}

  async insert(bagmon: BagmonModel): Promise<void> {
    await this.bagmonEntityRepository.insert(bagmon);
  }
  async findAll(): Promise<BagmonModel[]> {
    const bagmons = await this.bagmonEntityRepository.find();
    return bagmons;
  }
  async findById(id: number): Promise<BagmonModel> {
    const bagmon = await this.bagmonEntityRepository.findOneByOrFail({ id });
    return bagmon;
  }
  async updateContent(id: number): Promise<void> {
    await this.bagmonEntityRepository.update({ id }, {});
  }
  async deleteById(id: number): Promise<void> {
    await this.bagmonEntityRepository.delete({ id });
  }
}
