import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@InputType('DepartmentInput')
@ObjectType()
export class Department {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  //

  @Column()
  @Field()
  custom: string;
}
