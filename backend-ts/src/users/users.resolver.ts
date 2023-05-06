import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserType } from './users.type';

@Resolver((of) => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query((returns) => [UserType])
  getUsers() {
    return this.usersService.findAll();
  }

  @Query((returns) => UserType)
  getUser(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation((returns) => UserType)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation((returns) => UserType)
  remove(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
