import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('users')
// @UseGuards(AuthGuard)
@UseFilters(HttpExceptionFilter)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(): User[] {
        return this.userService.getUsers();
    }

    // exploring guard
    @Get("test-guard")
    // @UseGuards(AuthGuard)
    testGuard() {
        return "Hurrrah! you pass the guard";
    }

    @Get("error/:id")
    getErrorIFInvalidID(
        @Param("id", ParseIntPipe) id: number
    ) {
        return `ID : ${id}`
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
    ) {

        return this.userService.deleteUser(Number(id));

    }

    // exploring custom pipe
    @Post("use-custom-pipe")
    usePipe(
        @Body("name", new UppercasePipe()) name: string
    ) {
        return {
            message: `Recieved name : ${name}`
        }
    }


}
