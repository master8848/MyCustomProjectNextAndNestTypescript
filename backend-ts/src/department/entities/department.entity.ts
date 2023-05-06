import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Department {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  //

  @Column()
  custom: string;
}
