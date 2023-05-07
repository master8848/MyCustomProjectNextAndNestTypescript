import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('ClientCreateInput')
export class CreateClientInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
