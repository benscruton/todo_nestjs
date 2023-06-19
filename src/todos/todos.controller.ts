import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Todo } from './interfaces';
import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService){}

  @Get("error")
  @HttpCode(400)
  fail(message: string): string{
    return message;
  }

  @Get("hello")
  hello(): string {
    return "hello"
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDTO): Todo{
    return this.todosService.create(createTodoDto);
  }

  @Get()
  allTodos(): Todo[]{
    return this.todosService.findAll();
  }

  @Get(":todoId")
  todoById(@Param() params: any): Todo | null{
    return this.todosService.findOne(params.todoId);
  }
  
};