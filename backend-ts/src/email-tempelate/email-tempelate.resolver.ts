import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailTempelateService } from './email-tempelate.service';
import { EmailTempelate } from './entities/email-tempelate.entity';
import { CreateEmailTempelateInput } from './dto/create-email-tempelate.input';
import { UpdateEmailTempelateInput } from './dto/update-email-tempelate.input';

@Resolver(() => EmailTempelate)
export class EmailTempelateResolver {
  constructor(private readonly emailTempelateService: EmailTempelateService) {}

  @Mutation(() => EmailTempelate)
  createEmailTempelate(@Args('createEmailTempelateInput') createEmailTempelateInput: CreateEmailTempelateInput) {
    return this.emailTempelateService.create(createEmailTempelateInput);
  }

  @Query(() => [EmailTempelate], { name: 'emailTempelate' })
  findAll() {
    return this.emailTempelateService.findAll();
  }

  @Query(() => EmailTempelate, { name: 'emailTempelate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.emailTempelateService.findOne(id);
  }

  @Mutation(() => EmailTempelate)
  updateEmailTempelate(@Args('updateEmailTempelateInput') updateEmailTempelateInput: UpdateEmailTempelateInput) {
    return this.emailTempelateService.update(updateEmailTempelateInput.id, updateEmailTempelateInput);
  }

  @Mutation(() => EmailTempelate)
  removeEmailTempelate(@Args('id', { type: () => Int }) id: number) {
    return this.emailTempelateService.remove(id);
  }
}
