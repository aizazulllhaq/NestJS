import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name)
        private studentModel: Model<StudentDocument>
    ){};

    async createStudent(data: Partial<Student>): Promise<Student>{
        const newSTD = new this.studentModel(data);
        return newSTD.save();
    }

    async getStudents(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }

    async getStudentById(id: string): Promise<Student | null>{
        return this.studentModel.findById(id).exec();
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        // return this.studentModel.findByIdAndUpdate(id,data,{new: true})
        const updatedStudent = await this.studentModel.findByIdAndUpdate(
            id,
            {
                name: data.name  ?? null,
                age: data.age ?? null,
                email: data.email ?? null
            },
            {
                overwrite: true,
                new: true
            }
        )

        return updatedStudent;
    }

    async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id,data,{new: true})
    }

    async deleteStudent(id: string): Promise<Student | null>{
        return this.studentModel.findByIdAndDelete(id).exec();
    }
    
}
