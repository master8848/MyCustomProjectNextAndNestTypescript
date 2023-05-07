import { Module } from '@nestjs/common';
import { CustomFieldsService } from './custom-fields.service';
import { CustomFieldsResolver } from './custom-fields.resolver';

@Module({
  providers: [CustomFieldsResolver, CustomFieldsService]
})
export class CustomFieldsModule {}
