import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto, Status } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createTodoDto: CreateTodoDto,
  ) {
    const result = await this.todosService.create(createTodoDto);

    return result;
  }

  @Patch(':userid/:todoid')
  async updateTodo(
    @Param('userid', ParseIntPipe) userid: number,
    @Param('todoid', ParseIntPipe) todoid: number,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: UpdateTodoDto,
  ) {
    const result = await this.todosService.updateTodo({
      data: body,
      todoid,
      userid,
    });

    return {
      message: 'success api endpoint',
      data: result,
    };
  }

  @Delete(':userid/:todoid')
  async deleteSingleTodo(
    @Param('userid', ParseIntPipe) userid: number,
    @Param('todoid', ParseIntPipe) todoid: number,
  ) {
    const result = await this.todosService.deleteSingleTodo({ todoid, userid });
    return result;
  }

  @Get(':userid')
  async allTodoStatus(
    @Param('userid', ParseIntPipe) userid: number,
    @Query('status') status: Status,
  ) {
    if (status) {
      const result = await this.todosService.getTodoStatus({ userid, status });
      return result;
    } else {
      const result = await this.todosService.allTodoUser(userid);
      return result;
    }
  }


}
