import { CreateOrganizationInput } from './create-organization.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateOrganizationInput')
export class UpdateOrganizationInput extends PartialType(
  CreateOrganizationInput,
) {
  @Field()
  id: string;
}
