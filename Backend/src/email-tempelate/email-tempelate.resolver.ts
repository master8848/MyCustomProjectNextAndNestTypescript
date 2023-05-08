import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailTempelateService } from './email-tempelate.service';
import { EmailTempelate } from './entities/email-tempelate.entity';
import { CreateEmailTempelateInput } from './dto/create-email-tempelate.input';
import { UpdateEmailTempelateInput } from './dto/update-email-tempelate.input';

@Resolver(() => EmailTempelate)
export class EmailTempelateResolver {
  constructor(private readonly emailTempelateService: EmailTempelateService) {}

  @Mutation(() => EmailTempelate)
  createEmailTempelate(
    @Args('createEmailTempelateInput')
    createEmailTempelateInput: CreateEmailTempelateInput,
  ) {
    return this.emailTempelateService.create(createEmailTempelateInput);
  }

  @Query(() => [EmailTempelate])
  getEmailTempelates() {
    return this.emailTempelateService.findAll();
  }

  @Query(() => EmailTempelate)
  getEmailTempelate(@Args('id') id: string) {
    return this.emailTempelateService.findOne(id);
  }

  @Mutation(() => EmailTempelate)
  updateEmailTempelate(
    @Args('updateEmailTempelateInput')
    updateEmailTempelateInput: UpdateEmailTempelateInput,
  ) {
    return this.emailTempelateService.update(
      updateEmailTempelateInput.id,
      updateEmailTempelateInput,
    );
  }

  @Mutation(() => EmailTempelate)
  removeEmailTempelate(@Args('id') id: string) {
    return this.emailTempelateService.remove(id);
  }
}
