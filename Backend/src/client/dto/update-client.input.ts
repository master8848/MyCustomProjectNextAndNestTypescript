import { CreateClientInput } from './create-client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateClientInput')
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field()
  id: string;
}
