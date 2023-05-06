import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(env.DATABASE_URL),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
