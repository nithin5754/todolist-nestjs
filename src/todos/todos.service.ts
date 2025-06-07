import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { CreateTodoDto, Status } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly todoDb: DatabaseService) {}

  async create(createTodoDto: CreateTodoDto) {
    const { userId, ...rest } = createTodoDto;

    const result = await this.todoDb.todo.create({
      data: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return result;
  }

  async allTodoUser(id: number) {
    const result = await this.todoDb.todo.findMany({
      where: { userId: id },
      include: { user: true },
    });

    return result;
  }

  async deleteSingleTodo({
    userid,
    todoid,
  }: {
    userid: number;
    todoid: number;
  }) {
    const result = await this.todoDb.todo.delete({
      where: { userId: userid, id: todoid },
    });

    return result;
  }

  async updateTodo({
    userid,
    todoid,
    data,
  }: {
    userid: number;
    todoid: number;
    data: UpdateTodoDto;
  }) {
    const result = await this.todoDb.todo.update({
      where: { userId: userid, id: todoid },
      data,
    });

    return result;
  }

  async getTodoStatus({ userid, status }: { userid: number; status: Status }) {
    const result = await this.todoDb.todo.findMany({
      where: { userId: userid, status },
    });

    return result;
  }
}
