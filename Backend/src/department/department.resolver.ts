import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Mutation(() => Department)
  createDepartment(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ) {
    return this.departmentService.create(createDepartmentInput);
  }

  @Query(() => [Department])
  getDepartments() {
    return this.departmentService.findAll();
  }

  @Query(() => Department)
  getDepartment(@Args('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Mutation(() => Department)
  updateDepartment(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return this.departmentService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    );
  }

  @Mutation(() => Department)
  removeDepartment(@Args('id') id: string) {
    return this.departmentService.remove(id);
  }
}
