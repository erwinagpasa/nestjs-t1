import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { ItemsModule } from '../items/items.module';

@Module({
  imports: [ItemsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
