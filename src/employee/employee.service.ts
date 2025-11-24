import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>
    ){};

    async createEmployee(): Promise<Employee>{

        const profile = await new this.profileModel({
            age: 30,
            qualifications: "Bachelor's Degree"
        }).save();


        const employee = await new this.employeeModel({
            name: "John Doe",
            profile: profile._id
        }).save();


        return employee;
    }

    async getEmployees(){
        // return this.employeeModel.find().select("name").exec();
        // return this.employeeModel.find().select("name").populate("profile").exec();
        return this.employeeModel.find().select("name").populate({ path: "profile" , select: "qualifications"}).exec();
    }

}
