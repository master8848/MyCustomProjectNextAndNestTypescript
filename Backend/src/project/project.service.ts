import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepo: Repository<Project>,
  ) {}

  create(createProjectInput: CreateProjectInput) {
    return this.projectRepo.save(
      this.projectRepo.create({ ...createProjectInput, id: uuid() }),
    );
  }

  findAll() {
    return this.projectRepo.find();
  }

  findOne(id: string) {
    try {
      return this.projectRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Project not found');
    }
  }

  async update(id: string, updateProjectInput: UpdateProjectInput) {
    let Project;
    try {
      Project = await this.projectRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Project not found');
    }
    Project = { ...Project, ...updateProjectInput };
    return this.projectRepo.save(Project);
  }

  async remove(id: string) {
    let Project;
    try {
      Project = await this.projectRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Project not found');
    }
    this.projectRepo.remove(Project);
    return Project;
  }
}
