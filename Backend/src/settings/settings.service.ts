import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Setting } from './entities/setting.entity';
@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting) private settingRepo: Repository<Setting>,
  ) {}
  create(createSettingInput: CreateSettingInput) {
    return 'This action adds a new setting';
  }

  findAll() {
    return `This action returns all settings`;
  }

  findOne(id: string) {
    return `This action returns a #${id} setting`;
  }

  async update(id: string, updateSettingInput: UpdateSettingInput) {
    return `This action updates a #${id} setting`;
  }

  async remove(id: string) {
    return `This action removes a #${id} setting`;
  }
}
