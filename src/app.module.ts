import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BagmonsModule } from './bagmons/bagmons.module';

@Module({
  imports: [BagmonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
