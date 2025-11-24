import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employe.dto';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>
    ){};

    async createEmployee(data: CreateEmployeeDto): Promise<Employee> {
        const newEmployee = new this.employeeModel(data);
        return newEmployee.save();
    }

    async getEmployees(): Promise<Employee[]> {
        return this.employeeModel.find().exec();
    }

    async deleteEmployee(id: string): Promise<Employee | null> {

        const employee = await this.employeeModel.findById(id).exec();
        console.log(employee);

        if(!employee) throw new NotFoundException("Employee Not Found");

        return this.employeeModel.findByIdAndDelete(id).exec();
    }

}
