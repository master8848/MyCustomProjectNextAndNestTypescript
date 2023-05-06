import { Department } from 'src/department/entities/department.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  // @Column((type) => User)
  // manager: User;

  @Column()
  role: string;

  @Column()
  siteRate: string;

  @Column()
  email: string;

  // @Column((type) => Department)
  // department: Department;

  // @Column((type) => Organization)
  // organization: Organization;

  //

  @Column()
  custom: string;
}
