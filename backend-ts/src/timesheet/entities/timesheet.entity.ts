import { Activity } from 'src/activity/entities/activity.entity';
import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Timesheet {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column((type) => Project)
  project: Project;

  @Column((type) => User)
  user: User;

  @Column((type) => Task)
  task: Task;

  @Column((type) => Activity)
  activity: Activity;

  @Column()
  date: string;

  @Column()
  billable: boolean;

  //

  @Column()
  custom: string;
}
