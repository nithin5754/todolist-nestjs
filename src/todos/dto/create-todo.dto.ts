import { IsString, IsNotEmpty, IsEnum, IsInt } from 'class-validator';
export enum Status {
  PROGRESS = 'PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @IsInt()
  userId: number

  @IsEnum(Status, {
    message: 'required valid status',
  })
  status: 'PROGRESS' | 'COMPLETED' | 'CANCELLED';
}
