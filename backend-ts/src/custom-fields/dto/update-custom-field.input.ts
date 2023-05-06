import { CreateCustomFieldInput } from './create-custom-field.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomFieldInput extends PartialType(CreateCustomFieldInput) {
  @Field(() => Int)
  id: number;
}
