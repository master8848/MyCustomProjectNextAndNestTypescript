import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class Location {}
@Entity()
export class Client {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column((type) => Location)
  shippingAddress: Location;

  @Column((type) => Location)
  billingAddress: Location;
}
