import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomFieldInput } from './dto/create-custom-field.input';
import { UpdateCustomFieldInput } from './dto/update-custom-field.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CustomField } from './entities/custom-field.entity';
@Injectable()
export class CustomFieldsService {
  constructor(
    @InjectRepository(CustomField)
    private customFieldRepo: Repository<CustomField>,
  ) {}
  create(createCustomFieldInput: CreateCustomFieldInput) {
    return 'This action adds a new customField';
  }

  findAll() {
    return `This action returns all customFields`;
  }

  findOne(id: string) {
    return `This action returns a #${id} customField`;
  }

  async update(id: string, updateCustomFieldInput: UpdateCustomFieldInput) {
    return `This action updates a #${id} customField`;
  }

  async remove(id: string) {
    return `This action removes a #${id} customField`;
  }
}
