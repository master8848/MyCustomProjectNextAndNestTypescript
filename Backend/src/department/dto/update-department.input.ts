import { CreateDepartmentInput } from './create-department.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateDepartmentInput')
export class UpdateDepartmentInput extends PartialType(CreateDepartmentInput) {
  @Field()
  id: string;
}
