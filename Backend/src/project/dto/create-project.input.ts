import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateProjectInput')
export class CreateProjectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
