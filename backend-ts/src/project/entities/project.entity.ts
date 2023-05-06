import { Client } from 'src/client/entities/client.entity';
import { Department } from 'src/department/entities/department.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Project {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column((type) => Client)
  client: Client[];

  @Column((type) => User)
  managers: User[];

  @Column((type) => User)
  teamMembers: User[];

  @Column((type) => User)
  observer: User[];

  @Column((type) => User)
  peogramManager: User[];

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  billable: boolean;

  @Column()
  siteRate: string;

  @Column((type) => Department)
  department: Department[];

  @Column((type) => Project)
  project: Project;

  //

  @Column()
  custom: string;
}
