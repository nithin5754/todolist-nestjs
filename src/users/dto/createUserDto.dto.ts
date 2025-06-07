import { IsEmail, IsNotEmpty, IsString } from "class-validator"


class CreateUserDto {
 

  @IsString()
  @IsNotEmpty()

   name:string

   @IsEmail()
   email:string

}

export {CreateUserDto}