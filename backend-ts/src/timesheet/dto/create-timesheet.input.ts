import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateTimesheetInput')
export class CreateTimesheetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
