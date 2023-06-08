export interface IDatabaseConfig {
  getDatabaseHost(): string;
  getDatabasePort(): string;
  getDatabaseUser(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
  getDatabaseSchema(): string;
  getDatabaseSync(): Boolean;
}
