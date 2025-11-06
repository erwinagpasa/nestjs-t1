import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Item } from '../items/item.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => [Item], { nullable: true })
  items?: Item[];
}
