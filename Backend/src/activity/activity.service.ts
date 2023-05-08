import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity) private activityRepo: Repository<Activity>,
  ) {}

  create(createActivityInput: CreateActivityInput) {
    return this.activityRepo.save(
      this.activityRepo.create({ ...createActivityInput, id: uuid() }),
    );
  }

  findAll() {
    return this.activityRepo.find();
  }

  findOne(id: string) {
    try {
      return this.activityRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Activity not found');
    }
  }

  async update(id: string, updateActivityInput: UpdateActivityInput) {
    let Activity;
    try {
      Activity = await this.activityRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Activity not found');
    }
    Activity = { ...Activity, ...updateActivityInput };
    return this.activityRepo.save(Activity);
  }

  async remove(id: string) {
    let Activity;
    try {
      Activity = await this.activityRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Activity not found');
    }
    this.activityRepo.remove(Activity);
    return Activity;
  }
}
