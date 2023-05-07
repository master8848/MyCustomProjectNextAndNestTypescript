import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@InputType('CustomFieldInput')
@ObjectType()
export class CustomField {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;
}
