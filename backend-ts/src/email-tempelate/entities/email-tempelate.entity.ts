import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EmailTempelate {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
