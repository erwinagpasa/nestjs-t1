import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { ItemsModule } from '../items/items.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { User } from './user.entity';
import { Item } from '../items/item.entity';
import { Transaction } from '../transactions/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Item, Transaction]),
    ItemsModule,
    TransactionsModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
