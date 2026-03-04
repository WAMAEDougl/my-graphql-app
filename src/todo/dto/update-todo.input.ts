import { CreateTodoInput } from './create-todo.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTodoInput {
  id: number;
  title?: string;
  description?: string;
  completed?: boolean;
}