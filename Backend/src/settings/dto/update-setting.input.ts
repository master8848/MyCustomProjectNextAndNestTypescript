import { CreateSettingInput } from './create-setting.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateSettingInput')
export class UpdateSettingInput extends PartialType(CreateSettingInput) {
  @Field()
  id: string;
}
