import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateSubscribersDto from './dto/createSubscribers.dto';
import Subsciber from './subscribers.entity';
import { Repository } from 'typeorm'

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(Subsciber)
    private subscribersRepository: Repository<Subsciber>
  ) { }

  async addSubscriber(subscriber: CreateSubscribersDto) {
    const newSubscriber = this.subscribersRepository.create(subscriber);
    await this.subscribersRepository.save(newSubscriber);
    return newSubscriber;
  }

  async getAllSubscribers() {
    return this.subscribersRepository.find()
  }
}
