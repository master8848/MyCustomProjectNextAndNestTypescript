import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepo.save(
      this.userRepo.create({ ...createUserInput, id: uuid() }),
    );
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: string) {
    try {
      return this.userRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('User not found');
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    let user;
    try {
      user = this.userRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('User not found');
    }
    user = { ...user, ...updateUserInput };
    return this.userRepo.save(user);
  }

  remove(id: string) {
    let user;
    try {
      user = this.userRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('User not found');
    }
    return this.userRepo.remove(user);
  }
}
