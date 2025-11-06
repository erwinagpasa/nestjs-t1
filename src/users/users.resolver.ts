import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Item } from '../items/item.model';
import { ItemsService } from '../items/items.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly itemsService: ItemsService,
  ) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args('id') id: string): User | undefined {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => [Item])
  items(@Parent() user: User): Item[] {
    return this.itemsService.findByUserId(user.id);
  }
}
