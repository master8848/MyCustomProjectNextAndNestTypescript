import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimesheetService } from './timesheet.service';
import { Timesheet } from './entities/timesheet.entity';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';

@Resolver(() => Timesheet)
export class TimesheetResolver {
  constructor(private readonly timesheetService: TimesheetService) {}

  @Mutation(() => Timesheet)
  createTimesheet(
    @Args('createTimesheetInput') createTimesheetInput: CreateTimesheetInput,
  ) {
    return this.timesheetService.create(createTimesheetInput);
  }

  @Query(() => [Timesheet])
  getTimesheets() {
    return this.timesheetService.findAll();
  }

  @Query(() => Timesheet)
  getTimesheet(@Args('id') id: string) {
    return this.timesheetService.findOne(id);
  }

  @Mutation(() => Timesheet)
  updateTimesheet(
    @Args('updateTimesheetInput') updateTimesheetInput: UpdateTimesheetInput,
  ) {
    return this.timesheetService.update(
      updateTimesheetInput.id,
      updateTimesheetInput,
    );
  }

  @Mutation(() => Timesheet)
  removeTimesheet(@Args('id') id: string) {
    return this.timesheetService.remove(id);
  }
}
