import { CreateEmailTempelateInput } from './create-email-tempelate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateEmailTempelateInput')
export class UpdateEmailTempelateInput extends PartialType(
  CreateEmailTempelateInput,
) {
  @Field(() => Int)
  id: number;
}
