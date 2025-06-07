import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/createUserDto.dto';

@Injectable()
export class UsersService {
  constructor(private readonly dataBase: DatabaseService) {}


  async create(createUserDto:CreateUserDto){


    const result=await this.dataBase.user.create({data:createUserDto})

    return result

  }
}
