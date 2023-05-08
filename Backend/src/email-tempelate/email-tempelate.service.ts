import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmailTempelateInput } from './dto/create-email-tempelate.input';
import { UpdateEmailTempelateInput } from './dto/update-email-tempelate.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { EmailTempelate } from './entities/email-tempelate.entity';
@Injectable()
export class EmailTempelateService {
  constructor(
    @InjectRepository(EmailTempelate)
    private emailTempelateRepo: Repository<EmailTempelate>,
  ) {}
  create(createEmailTempelateInput: CreateEmailTempelateInput) {
    return 'This action adds a new emailTempelate';
  }

  findAll() {
    return `This action returns all emailTempelate`;
  }

  findOne(id: string) {
    return `This action returns a #${id} emailTempelate`;
  }

  async update(
    id: string,
    updateEmailTempelateInput: UpdateEmailTempelateInput,
  ) {
    return `This action updates a #${id} emailTempelate`;
  }

  async remove(id: string) {
    return `This action removes a #${id} emailTempelate`;
  }
}
