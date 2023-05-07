import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateEmailTempelateInput')
export class CreateEmailTempelateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
