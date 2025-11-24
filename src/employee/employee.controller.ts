import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService){};

    @Post()
    async createEmployee(): Promise<Employee> {
        return this.employeeService.createEmployee();
    }


    @Get()
    async getAllEmployees(): Promise<Employee[]> {
        return this.employeeService.getEmployees();
    }

}
