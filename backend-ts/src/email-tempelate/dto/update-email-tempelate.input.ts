import { CreateEmailTempelateInput } from './create-email-tempelate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmailTempelateInput extends PartialType(CreateEmailTempelateInput) {
  @Field(() => Int)
  id: number;
}
