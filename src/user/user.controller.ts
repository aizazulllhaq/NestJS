import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(): User[] {
        return this.userService.getUsers();
    }

    @Get(":id")
    getUserById(
        @Param("id") id: string
    ) {

        return this.userService.getUserById(Number(id));

    }

    @Post()
    createUser(
        // @Body() body: { name: string, age: number }
        @Body() body: CreateUserDTO
    ) {

        return this.userService.createUser(body);

    }

    @Put(":id")
    updateUser(
        @Param("id") id: string,
        @Body() body: { name: string, age: number }
    ) {

        return this.userService.updateUser(Number(id), body)

    }

    @Patch(":id")
    patchUser(
        @Param("id") id: string,
        @Body() body: Partial<{ name: string, age: number }>
    ) {

        return this.userService.patchUser(Number(id), body)

    }

    @Delete(":id")
    removeUser(
        @Param("id") id: string
    ){

        return this.userService.deleteUser(Number(id));

    }

    @Post("use-custom-pipe")
    usePipe(
        @Body("name", new UppercasePipe()) name: string
    ){
        return {
            message: `Recieved name : ${name}`
        }
    }

}
