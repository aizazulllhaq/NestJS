import { IsInt, IsString } from "class-validator";

export class CreateUserDTO{

    @IsString()
    name: string;

    @IsInt()
    age: number;

}