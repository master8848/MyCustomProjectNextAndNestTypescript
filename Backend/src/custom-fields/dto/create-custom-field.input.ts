import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateCustomFieldInput')
export class CreateCustomFieldInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
