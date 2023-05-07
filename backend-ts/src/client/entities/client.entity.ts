import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
class Location {}

@Entity()
@InputType('ClientInput')
@ObjectType()
export class Client {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column((type) => Location)
  @Field()
  shippingAddress: Location;

  @Column((type) => Location)
  @Field()
  billingAddress: Location;
}
