import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateProjectInput')
export class CreateProjectInput {
  @Field()
  name: string;

  @Field((type) => [String])
  client: string[];

  @Field((type) => [String])
  managers: string[];

  @Field((type) => [String])
  teamMembers: string[];

  @Field((type) => [String])
  observer: string[];

  @Field((type) => [String])
  peogramManager: string[];

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  billable: boolean;

  @Field()
  siteRate: string;

  @Field((type) => [String])
  department: string[];

  @Field((type) => String)
  project: string;

  //

  @Field()
  custom: string;
}
