import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log(process.env.DB_URL);

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
