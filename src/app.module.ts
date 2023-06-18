import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService} from './todos/todos.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
