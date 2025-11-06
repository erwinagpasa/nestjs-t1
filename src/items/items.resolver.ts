import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [Item], { name: 'items' })
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item', nullable: true })
  findOne(@Args('id') id: string): Item | undefined {
    return this.itemsService.findOne(id);
  }
}
