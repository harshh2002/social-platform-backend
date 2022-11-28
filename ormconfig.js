const migrationDir = 'migrations';

module.exports = {
  type: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5344,
  database: 'project',
  entities,
  synchronize: false,
  ssl: false,
  entities: ['src/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [`src/db/${migrationDir}/*.ts`],
  cli: {
    entitiesDir: 'src/*/',
    migrationsDir: `src/db/${migrationDir}`,
  },
};
