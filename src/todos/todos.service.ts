import { Injectable } from '@nestjs/common';
import {Todo} from "./interfaces";
import { CreateTodoDTO } from './classes';


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

  findOne(todoId: string): Todo | null{
    const selectedItem: Todo = this.todos.filter(todo =>
      todo.id === todoId
    )[0];
    return selectedItem || null;
  }
};