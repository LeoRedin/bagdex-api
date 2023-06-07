import { Test, TestingModule } from '@nestjs/testing';
import { BagmonsController } from './bagmons.controller';
import { BagmonsService } from './bagmons.service';

describe('BagmonsController', () => {
  let controller: BagmonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BagmonsController],
      providers: [BagmonsService],
    }).compile();

    controller = module.get<BagmonsController>(BagmonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
