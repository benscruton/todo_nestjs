import { HttpException, Injectable } from '@nestjs/common';
import {Todo} from "./interfaces";


@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [
    {
      id: "1",
      text: "Add some mock data",
      isCompleted: true
    },
    {
      id: "2",
      text: "Finish building app",
      isCompleted: false
    }
  ];

  create(todo: Todo): Todo{
    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[]{
    return this.todos;
  };

  findOne(todoId: string): Todo{
    const selectedItem: Todo = this.todos.filter(todo =>
      todo.id === todoId
    )[0];
    if(!selectedItem){
      throw new HttpException("Not Found", 404);
    }
    return selectedItem;
  }
};