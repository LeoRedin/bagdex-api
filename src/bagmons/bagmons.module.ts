import { Module } from '@nestjs/common';
import { BagmonsService } from './bagmons.service';
import { BagmonsController } from './bagmons.controller';

@Module({
  controllers: [BagmonsController],
  providers: [BagmonsService]
})
export class BagmonsModule {}
