import { InputType, Field } from '@nestjs/graphql';
@InputType('CreateOrganizationInput')
export class CreateOrganizationInput {
  @Field()
  name: string;

  @Field((type) => [String])
  members: string[];

  @Field()
  custom: string;
}
