import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { ItemsModule } from '../items/items.module';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ItemsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
