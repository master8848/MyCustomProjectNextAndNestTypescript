import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
@Entity()
@InputType('EmailTempelateInput')
@ObjectType()
export class EmailTempelate {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;
}
