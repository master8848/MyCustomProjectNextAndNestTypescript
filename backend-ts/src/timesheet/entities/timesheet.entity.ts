import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Activity } from 'src/activity/entities/activity.entity';
import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@InputType('TimesheetInput')
@ObjectType()
export class Timesheet {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field((type) => Project)
  project: string;

  @Column()
  @Field((type) => User)
  user: string;

  @Column()
  @Field((type) => Task)
  task: string;

  @Column()
  @Field((type) => Activity)
  activity: string;

  @Column()
  @Field()
  date: string;

  @Column()
  @Field()
  billable: boolean;

  //

  @Column()
  @Field()
  custom: string;
}
