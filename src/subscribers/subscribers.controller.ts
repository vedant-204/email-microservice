import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import CreateSubscribersDto from './dto/createSubscribers.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(
    private readonly subscribersService: SubscribersService,
  ) { }

  @EventPattern({ cmd: 'add-subscriber' })
  addSubscriber(subscriber: CreateSubscribersDto) {
    return this.subscribersService.addSubscriber(subscriber);
  }

  @EventPattern({ cmd: 'get-subscriber' })
  getAllSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }
}
