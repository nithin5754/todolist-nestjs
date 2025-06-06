import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseService } from 'src/database/database.service';


@Module({

  controllers: [TodosController],
  providers: [TodosService,DatabaseService],
})
export class TodosModule {}
