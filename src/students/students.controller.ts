import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    async createStudent(@Body() data: Partial<Student>): Promise<Student> {
        return this.studentsService.createStudent(data);
    }

    @Get()
    async getStudents(): Promise<Student[]> {
        return this.studentsService.getStudents();
    }
    
    @Get(':id')
    async getStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentsService.getStudentById(id);
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id: number, @Body() data: Partial<Student>): Promise<Student> {
        return this.studentsService.updateStudent(id, data);
    }
}
