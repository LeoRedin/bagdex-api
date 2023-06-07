import { Test, TestingModule } from '@nestjs/testing';
import { BagmonsService } from './bagmons.service';

describe('BagmonsService', () => {
  let service: BagmonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BagmonsService],
    }).compile();

    service = module.get<BagmonsService>(BagmonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
