import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateOrganizationInput')
export class CreateOrganizationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
