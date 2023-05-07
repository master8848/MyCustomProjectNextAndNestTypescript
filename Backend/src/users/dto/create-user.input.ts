import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  manager: string;

  @Field()
  role: string;

  @Field()
  siteRate: string;

  @Field()
  email: string;

  @Field()
  department: string;

  @Field()
  organization: string;

  //

  @Field()
  custom: string;
}
