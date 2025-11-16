import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Item } from '../items/item.entity';
import { Transaction } from '../transactions/transaction.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<boolean> {
    // Delete related records first due to foreign key constraints
    // Order: transactions -> items -> user
    await this.transactionsRepository.delete({ userId: id });
    await this.itemsRepository.delete({ userId: id });

    const result = await this.usersRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}
