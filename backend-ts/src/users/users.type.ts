import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field()
  id: string;
  @Field()
  name: string;

  @Field()
  manager: string;

  @Field()
  role: string;

  @Field()
  siteRate: string;

  @Field()
  email: string;
  // @Field((type) => Department)
  // department: string;
}
