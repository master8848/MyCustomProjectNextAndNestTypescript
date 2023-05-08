import { Module } from '@nestjs/common';
import { EmailTempelateService } from './email-tempelate.service';
import { EmailTempelateResolver } from './email-tempelate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailTempelate } from './entities/email-tempelate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailTempelate])],
  providers: [EmailTempelateResolver, EmailTempelateService],
})
export class EmailTempelateModule {}
