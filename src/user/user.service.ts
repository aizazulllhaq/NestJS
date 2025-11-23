import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    private isConnected = false;

    private users: User[] = [
        {
            id: 1,
            name: "aizaz",
            age: 10
        },
        {
            id: 2,
            name: "ihtisham",
            age: 30
        }
    ]

    // IMP : Life cyle method/event/hook
    onModuleInit(){
        this.isConnected = true;
        console.log(`Fake db connected : ${this.isConnected}`);
    }

    onApplicationShutdown(signal : string = "db disconnected from frontend"){
        this.isConnected = false;
        console.log(`Fake db disconnected : ${this.isConnected}, and signal string : ${signal}`)
    }

    // GET users
    getUsers(): User[] {
        return this.users;
    }

   // GET user by id
   getUserById(id: number): User {
    const user = this.users.find(user => user.id === id);

    if(!user) throw new NotFoundException("User Not Found");

    return user;
   }

   // POST create user;
//    createUser(data: {name: string, age: number}){  // before provding DTOs & interafaces
   createUser(dataDTO: CreateUserDTO): User{
    const newUser: User = {
        id: Date.now(),
        ...dataDTO
    };

    this.users.push(newUser);

    // return {success: true, message: "user created", data: newUser}
    return newUser;  // newUser === User ( interface)
   }

   // PUT update complete user;
   updateUser(
    id: number,
    // data: {name: string, age: number}
    data: CreateUserDTO
   ): User{
    
    const index = this.users.findIndex(user=> user.id === id);

    if(index === -1) throw new NotFoundException("User Not found");

    this.users[index] = {id, ...data};

    // return {
    //     success: true,
    //     message: "User updated successfully",
    //     data: data
    // }

    return this.users[index];

   }


   // DTO & Interfaces applyied above.

   // PATCH update user partialy
   patchUser(
    id: number,
    data: Partial<{name: string, age: number}>
   ){

    // const user = this.users.find(user=> user.id === id);
    const user = this.getUserById(id);

    if(!user) throw new NotFoundException("User not found");

    Object.assign(user,data);

    return {
        success: true,
        message: "user fields updated",
        data: user
    }

   }

   // DELETE user;
   deleteUser(
    id: number
   ){
    const index = this.users.findIndex(user=> user.id === id);

    if(index === -1) throw new NotFoundException("User not found");

    const deletedUser = this.users.splice(index,1);

    return {
        success: true,
        message: "user deleted successfully",
        data: deletedUser[0]
    }
   }

}
