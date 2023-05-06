import { Injectable } from '@nestjs/common';
import { CreateCustomFieldInput } from './dto/create-custom-field.input';
import { UpdateCustomFieldInput } from './dto/update-custom-field.input';

@Injectable()
export class CustomFieldsService {
  create(createCustomFieldInput: CreateCustomFieldInput) {
    return 'This action adds a new customField';
  }

  findAll() {
    return `This action returns all customFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customField`;
  }

  update(id: number, updateCustomFieldInput: UpdateCustomFieldInput) {
    return `This action updates a #${id} customField`;
  }

  remove(id: number) {
    return `This action removes a #${id} customField`;
  }
}
