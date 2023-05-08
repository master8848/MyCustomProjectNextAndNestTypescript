import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Task } from './entities/task.entity';
@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private TaskRepo: Repository<Task>) {}
  create(createTaskInput: CreateTaskInput) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  async update(id: string, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  async remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
