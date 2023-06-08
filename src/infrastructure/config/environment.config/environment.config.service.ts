import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from 'src/domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService implements IDatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }
  getDatabasePort(): string {
    return this.configService.get<string>('DATABASE_PORT');
  }
  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }
  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }
  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }
  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA');
  }
  getDatabaseSync(): Boolean {
    return this.configService.get<Boolean>('DATABASE_SYNC');
  }
}
