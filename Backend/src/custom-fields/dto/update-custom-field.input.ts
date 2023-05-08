import { CreateCustomFieldInput } from './create-custom-field.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateCustomFieldInput')
export class UpdateCustomFieldInput extends PartialType(
  CreateCustomFieldInput,
) {
  @Field()
  id: string;
}
