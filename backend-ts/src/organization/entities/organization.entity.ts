import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Organization {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => User)
  members: string[];

  //

  @Column()
  @Field()
  custom: string;
}
