import { Injectable } from '@nestjs/common';
import { CreateEmailTempelateInput } from './dto/create-email-tempelate.input';
import { UpdateEmailTempelateInput } from './dto/update-email-tempelate.input';

@Injectable()
export class EmailTempelateService {
  create(createEmailTempelateInput: CreateEmailTempelateInput) {
    return 'This action adds a new emailTempelate';
  }

  findAll() {
    return `This action returns all emailTempelate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailTempelate`;
  }

  update(id: number, updateEmailTempelateInput: UpdateEmailTempelateInput) {
    return `This action updates a #${id} emailTempelate`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailTempelate`;
  }
}
