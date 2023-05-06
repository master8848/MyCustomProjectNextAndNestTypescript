import { Client } from 'src/client/entities/client.entity';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column((type) => User)
  assignedTo: User[];

  @Column()
  status: string;

  @Column()
  deadline: string;

  @Column()
  creation: string;

  @Column((type) => Client)
  client: Client;

  @Column((type) => Project)
  project: Project;

  @Column()
  global: boolean;

  //

  @Column()
  custom: string;
}
