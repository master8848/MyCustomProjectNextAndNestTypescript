import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@InputType('SettingsInput')
@ObjectType()
export class Setting {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field()
  id: string;
}
