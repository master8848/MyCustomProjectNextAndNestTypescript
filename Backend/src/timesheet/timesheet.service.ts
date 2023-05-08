import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Timesheet } from './entities/timesheet.entity';
@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet) private TimesheetRepo: Repository<Timesheet>,
  ) {}
  create(createTimesheetInput: CreateTimesheetInput) {
    return 'This action adds a new timesheet';
  }

  findAll() {
    return `This action returns all timesheet`;
  }

  findOne(id: string) {
    return `This action returns a #${id} timesheet`;
  }

  async update(id: string, updateTimesheetInput: UpdateTimesheetInput) {
    return `This action updates a #${id} timesheet`;
  }

  async remove(id: string) {
    return `This action removes a #${id} timesheet`;
  }
}
