import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
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
  assignedTo: string[];

  @Column()
  @Field()
  status: string;

  @Column()
  @Field()
  deadline: string;

  @Column()
  @Field()
  creation: string;

  @Column()
  @Field((type) => Client)
  client: string;

  @Column()
  @Field((type) => Project)
  project: string;

  @Column()
  @Field()
  global: boolean;

  //

  @Column()
  @Field()
  custom: string;
}
