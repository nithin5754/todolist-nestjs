import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  
  @IsString()
  body: string;

  @IsEnum(['PROGRESS', 'COMPLETED', 'CANCELLED'], {
    message: 'required valid status',
  })
  status: 'PROGRESS' | 'COMPLETED' | 'CANCELLED';
}
