import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';

@Module({
  providers: [SubscribersService]
})
export class SubscribersModule { }
