import { Module } from '@nestjs/common';
import { entities } from './db.provider';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5434,
      database: 'project',
      entities,
      synchronize: false,
      ssl: false,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [],
})
export class DbModule {}
