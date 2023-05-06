import { Module } from '@nestjs/common';
import { EmailTempelateService } from './email-tempelate.service';
import { EmailTempelateResolver } from './email-tempelate.resolver';

@Module({
  providers: [EmailTempelateResolver, EmailTempelateService]
})
export class EmailTempelateModule {}
