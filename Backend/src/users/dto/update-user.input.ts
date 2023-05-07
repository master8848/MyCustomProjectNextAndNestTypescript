import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType('UpdateUserInput')
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
}
