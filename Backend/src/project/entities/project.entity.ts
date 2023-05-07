import { Field, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => [Client])
  client: string[];

  @Column()
  @Field((type) => [User])
  managers: string[];

  @Column()
  @Field((type) => [User])
  teamMembers: string[];

  @Column()
  @Field((type) => [User])
  observer: string[];

  @Column()
  @Field((type) => [User])
  peogramManager: string[];

  @Column()
  @Field()
  startDate: string;

  @Column()
  @Field()
  endDate: string;

  @Column()
  @Field()
  billable: boolean;

  @Column()
  @Field()
  siteRate: string;

  @Column()
  @Field((type) => [Department])
  department: string[];

  @Column()
  @Field((type) => Project)
  project: string;

  //

  @Column()
  @Field()
  custom: string;
}
