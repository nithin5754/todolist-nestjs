import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private readonly todoDb: DatabaseService) {}

  async create(createTodoDto: Prisma.TodoCreateInput) {
    const result = await this.todoDb.todo.create({ data: createTodoDto });
    return result;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: Prisma.TodoUpdateInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
