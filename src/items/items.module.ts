import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';
import { pubSubProvider } from '../pubsub.provider';
import { Item } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemsResolver, ItemsService, pubSubProvider],
  exports: [ItemsService],
})
export class ItemsModule {}
