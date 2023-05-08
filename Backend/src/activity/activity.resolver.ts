import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActivityService } from './activity.service';
import { Activity } from './entities/activity.entity';
import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';

@Resolver(() => Activity)
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  @Mutation(() => Activity)
  createActivity(
    @Args('createActivityInput') createActivityInput: CreateActivityInput,
  ) {
    return this.activityService.create(createActivityInput);
  }

  @Query(() => [Activity])
  getActivities() {
    return this.activityService.findAll();
  }

  @Query(() => Activity)
  getActivity(@Args('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Mutation(() => Activity)
  updateActivity(
    @Args('updateActivityInput') updateActivityInput: UpdateActivityInput,
  ) {
    return this.activityService.update(
      updateActivityInput.id,
      updateActivityInput,
    );
  }

  @Mutation(() => Activity)
  removeActivity(@Args('id') id: string) {
    return this.activityService.remove(id);
  }
}
