import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, RmqContext, Payload, Ctx } from '@nestjs/microservices';
import CreateSubscribersDto from './dto/createSubscribers.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(
    private readonly subscribersService: SubscribersService,
  ) { }

  @MessagePattern({ cmd: 'add-subscriber' })
  async addSubscriber(@Payload() subscriber: CreateSubscribersDto, @Ctx() context: RmqContext) {
    const newSubscriber = await this.subscribersService.addSubscriber(subscriber);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg)
    return newSubscriber;
  }

  @EventPattern({ cmd: 'get-subscriber' })
  getAllSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }
}
