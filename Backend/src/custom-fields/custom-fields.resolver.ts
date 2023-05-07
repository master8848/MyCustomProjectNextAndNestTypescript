import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomFieldsService } from './custom-fields.service';
import { CustomField } from './entities/custom-field.entity';
import { CreateCustomFieldInput } from './dto/create-custom-field.input';
import { UpdateCustomFieldInput } from './dto/update-custom-field.input';

@Resolver(() => CustomField)
export class CustomFieldsResolver {
  constructor(private readonly customFieldsService: CustomFieldsService) {}

  @Mutation(() => CustomField)
  createCustomField(@Args('createCustomFieldInput') createCustomFieldInput: CreateCustomFieldInput) {
    return this.customFieldsService.create(createCustomFieldInput);
  }

  @Query(() => [CustomField], { name: 'customFields' })
  findAll() {
    return this.customFieldsService.findAll();
  }

  @Query(() => CustomField, { name: 'customField' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customFieldsService.findOne(id);
  }

  @Mutation(() => CustomField)
  updateCustomField(@Args('updateCustomFieldInput') updateCustomFieldInput: UpdateCustomFieldInput) {
    return this.customFieldsService.update(updateCustomFieldInput.id, updateCustomFieldInput);
  }

  @Mutation(() => CustomField)
  removeCustomField(@Args('id', { type: () => Int }) id: number) {
    return this.customFieldsService.remove(id);
  }
}
