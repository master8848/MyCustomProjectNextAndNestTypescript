import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    console.log(createUserInput);
    return this.usersService.create(createUserInput);
  }

  @Query((returns) => [User])
  getUsers() {
    return this.usersService.findAll();
  }

  @Query((returns) => User)
  getUser(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation((returns) => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation((returns) => User)
  removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
