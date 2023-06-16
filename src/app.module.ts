import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule {}
