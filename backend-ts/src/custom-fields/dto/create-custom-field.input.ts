import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomFieldInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
