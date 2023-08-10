import { BagmonModel } from 'src/domain/model/bagmon';
import { IBagmonRepository } from 'src/domain/repositories/bagmon';

export class GetBagmonUseCases {
  constructor(private readonly bagmonRepository: IBagmonRepository) {}

  async execute(id: number): Promise<BagmonModel> {
    return await this.bagmonRepository.findById(id);
  }
}
