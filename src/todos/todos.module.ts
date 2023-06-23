import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Todo } from "./entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Todo
    ])
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {};