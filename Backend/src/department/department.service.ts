import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
  ) {}

  async create(createDepartmentInput: CreateDepartmentInput) {
    return this.departmentRepo.save(
      this.departmentRepo.create({ ...createDepartmentInput, id: uuid() }),
    );
  }

  findAll() {
    return this.departmentRepo.find();
  }

  findOne(id: string) {
    try {
      return this.departmentRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('User not found');
    }
  }

  async update(id: string, updateDepartmentInput: UpdateDepartmentInput) {
    let Department;
    try {
      Department = await this.departmentRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Department not found');
    }
    Department = { ...Department, ...updateDepartmentInput };
    return this.departmentRepo.save(Department);
  }

  async remove(id: string) {
    let Department;
    try {
      Department = await this.departmentRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Department not found');
    }
    this.departmentRepo.remove(Department);
    return Department;
  }
}
