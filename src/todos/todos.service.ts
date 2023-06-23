import { Injectable, NotFoundException } from '@nestjs/common';
import {Todo} from "./entities";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class TodosService {
  // private readonly todos: Todo[] = [
  //   {
  //     todo_id: "44805850-fae9-4275-bfa0-6ad0c6baafc5",
  //     text: "Add some mock data",
  //     isCompleted: true
  //   },
  //   {
  //     todo_id: "7460448e-6229-45dc-a2a8-f26f7b5f786d",
  //     text: "Finish building app",
  //     isCompleted: false
  //   }
  // ];
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){};

  async create(todo: Todo): Promise<Todo>{
    return this.todoRepository.save(
      this.todoRepository.create(todo)
    );
  };

  findAll(): Promise<Todo[]>{
    return this.todoRepository.find();
  };

  findById(todoId: number): Promise<Todo | null>{
    return this.todoRepository.findOneBy({todoId});
  };

  async updateById(todoId: number, partialTodo: Todo): Promise<Todo | null>{
    await this.todoRepository.update(
      {todoId},
      partialTodo
    );
    return this.todoRepository.findOneBy({todoId});
  }
};