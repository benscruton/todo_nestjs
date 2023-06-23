import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Todo } from './entities';
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
  createTodo(@Body() createTodoDto: CreateTodoDTO): Promise<Todo>{
    return this.todosService.create(createTodoDto);
  }

  @Get()
  allTodos(): Promise<Todo[]>{
    return this.todosService.findAll();
  }

  @Get(":todoId")
  todoById(@Param("todoId", ParseIntPipe) todoId: number): Promise<Todo | null>{
    return this.todosService.findById(todoId);
  }
  
  @Put(":todoId")
  updateTodoById(@Param("todoId", ParseIntPipe) todoId: number, @Body() updateTodoDto: CreateTodoDTO): Promise<Todo | null>{
    return this.todosService.updateById(todoId, updateTodoDto);
  }
};