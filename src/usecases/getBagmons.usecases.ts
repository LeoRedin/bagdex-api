import { BagmonModel } from 'src/domain/model/bagmon';
import { IBagmonRepository } from 'src/domain/repositories/bagmon';

export class GetBagmonsUseCases {
  constructor(private readonly bagmonRepository: IBagmonRepository) {}

  async execute(): Promise<Array<BagmonModel>> {
    return await this.bagmonRepository.findAll();
  }
}
