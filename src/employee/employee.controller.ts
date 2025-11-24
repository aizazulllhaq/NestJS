import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employe.dto';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) { };

    @Post()
    async createEmployee(
        @Body() createEmployeeDTO: CreateEmployeeDto
    ) {
        // const newEmployee = {
        //     name: 'John Doe',
        //     address: {
        //         street: '123 Main St',
        //         city: 'Anytown'
        //     }
        // }
        return this.employeeService.createEmployee(createEmployeeDTO);
    }

    @Get()
    async getEmployees(): Promise<Employee[]> {
        return this.employeeService.getEmployees();
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: string): Promise<Employee | null> {
        return this.employeeService.deleteEmployee(id);
    }
}