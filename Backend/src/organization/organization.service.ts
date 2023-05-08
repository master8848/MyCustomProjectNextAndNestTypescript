import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization) private orgRepo: Repository<Organization>,
  ) {}

  create(createOrganizationInput: CreateOrganizationInput) {
    return this.orgRepo.save(
      this.orgRepo.create({ ...createOrganizationInput, id: uuid() }),
    );
  }

  findAll() {
    return this.orgRepo.find();
  }

  findOne(id: string) {
    try {
      return this.orgRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Organization not found');
    }
  }

  async update(id: string, updateOrganizationInput: UpdateOrganizationInput) {
    let Organization;
    try {
      Organization = await this.orgRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Organization not found');
    }
    Organization = { ...Organization, ...updateOrganizationInput };
    return this.orgRepo.save(Organization);
  }

  async remove(id: string) {
    let Organization;
    try {
      Organization = await this.orgRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Organization not found');
    }
    this.orgRepo.remove(Organization);
    return Organization;
  }
}
