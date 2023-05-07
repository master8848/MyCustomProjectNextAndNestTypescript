import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  manager: string;

  @Column()
  @Field()
  role: string;

  @Column()
  @Field()
  siteRate: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field((type) => Department)
  department: string;

  @Column()
  @Field((type) => Organization)
  organization: string;

  //

  @Column()
  @Field()
  custom: string;
}
