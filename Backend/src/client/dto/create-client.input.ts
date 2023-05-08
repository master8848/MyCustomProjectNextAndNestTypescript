import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('ClientCreationLocation')
class Location {
  @Field()
  country: string;
}
@InputType('ClientCreateInput')
export class CreateClientInput {
  @Field()
  name: string;

  @Field((type) => [Location])
  shippingAddress: Location;

  @Field((type) => [Location])
  billingAddress: Location;
}
