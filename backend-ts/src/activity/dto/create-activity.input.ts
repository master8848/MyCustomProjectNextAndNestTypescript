import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateActivityInput')
export class CreateActivityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
