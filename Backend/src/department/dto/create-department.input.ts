import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateDepartmentInput')
export class CreateDepartmentInput {
  @Field()
  name: string;

  //

  @Field()
  custom: string;
}
