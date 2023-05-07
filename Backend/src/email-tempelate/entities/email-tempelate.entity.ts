import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
@Entity()
@ObjectType()
export class EmailTempelate {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;
}
