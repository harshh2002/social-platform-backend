import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DbModule, PostsModule, AuthModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
