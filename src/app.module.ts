import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersController } from './subscribers/subscribers.controller';
import { SubscribersModule } from './subscribers/subscribers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), SubscribersModule, DatabaseModule],
  controllers: [AppController, SubscribersController],
  providers: [AppService],
})
export class AppModule { }
