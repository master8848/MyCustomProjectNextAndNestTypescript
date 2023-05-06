import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required:true})
  name: string;

  @Prop()
  email: number;

  @Prop()
  password: string;

  @Prop({required:true})
  managerEmail: string;

  @Prop()
  siteRate: string;
  
  // @Prop()
  // department:
}

export const UserSchema = SchemaFactory.createForClass(User);