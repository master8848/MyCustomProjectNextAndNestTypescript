import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Activity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column((type) => Task)
  task: Task[];

  @Column((type) => Project)
  project: Project[];

  @Column()
  taskSpecific: boolean;
  @Column()
  projectSpecific: boolean;
  @Column()
  global: boolean;

  //

  @Column()
  custom: string;
}
