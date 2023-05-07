import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType('User')
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
}
