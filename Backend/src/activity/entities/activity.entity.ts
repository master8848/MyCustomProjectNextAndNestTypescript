import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Activity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Task)
  task: string[];

  @Column()
  @Field((type) => Project)
  project: string[];

  @Column()
  @Field()
  taskSpecific: boolean;

  @Column()
  @Field()
  projectSpecific: boolean;

  @Column()
  @Field()
  global: boolean;

  //

  @Column()
  @Field()
  custom: string;
}
