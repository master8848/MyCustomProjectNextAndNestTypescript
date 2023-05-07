import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('Project')
export class CreateProjectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
