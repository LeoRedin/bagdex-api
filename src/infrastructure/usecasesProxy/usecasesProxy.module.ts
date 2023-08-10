import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { DatabaseBagmonRepository } from '../repositories/bagmon.repository';
import { UseCaseProxy } from './usecasesProxy';
import { GetBagmonUseCases } from 'src/usecases/getBagmon.usecases';
import { GetBagmonsUseCases } from 'src/usecases/getBagmons.usecases';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static GET_BAGMON_USECASES_PROXY = 'getBagmonUsecasesProxy';
  static GET_BAGMONS_USECASES_PROXY = 'getBagmonsUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseBagmonRepository],
          provide: UsecasesProxyModule.GET_BAGMON_USECASES_PROXY,
          useFactory: (bagmonRepository: DatabaseBagmonRepository) =>
            new UseCaseProxy(new GetBagmonUseCases(bagmonRepository)),
        },
        {
          inject: [DatabaseBagmonRepository],
          provide: UsecasesProxyModule.GET_BAGMONS_USECASES_PROXY,
          useFactory: (bagmonRepository: DatabaseBagmonRepository) =>
            new UseCaseProxy(new GetBagmonsUseCases(bagmonRepository)),
        },
      ],
    };
  }
}
