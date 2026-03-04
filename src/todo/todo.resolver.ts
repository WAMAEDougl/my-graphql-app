import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query('todos')
  findAll() {
    return this.todoService.findAll();
  }

  @Query('todo')
  findOne(@Args('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation('createTodo')
  create(@Args('createTodoInput') input: CreateTodoInput) {
    return this.todoService.create(input);
  }

  @Mutation('updateTodo')
  update(@Args('updateTodoInput') input: UpdateTodoInput) {
    return this.todoService.update(input);
  }

  @Mutation('removeTodo')
  remove(@Args('id') id: number) {
    return this.todoService.remove(id);
  }
}