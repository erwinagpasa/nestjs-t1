import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return this.itemsRepository.findOne({ where: { id } });
  }

  async findByUserId(userId: string): Promise<Item[]> {
    return this.itemsRepository.find({ where: { userId } });
  }

  async create(
    name: string,
    description: string,
    userId: string,
    price?: number,
  ): Promise<Item> {
    const newItem = this.itemsRepository.create({
      name,
      description,
      userId,
      price,
    });
    return this.itemsRepository.save(newItem);
  }
}
