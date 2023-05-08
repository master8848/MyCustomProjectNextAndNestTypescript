import { Module } from '@nestjs/common';
import { CustomFieldsService } from './custom-fields.service';
import { CustomFieldsResolver } from './custom-fields.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomField } from './entities/custom-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomField])],
  providers: [CustomFieldsResolver, CustomFieldsService],
})
export class CustomFieldsModule {}
