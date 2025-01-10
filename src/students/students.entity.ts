import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


    @Entity('Students')
    export class Student {
        @PrimaryGeneratedColumn()
        id: number
        
        @Column()
        firstName: string

        @Column()
        lastName: string

        @Column({ unique: true})
        email: string

        @CreateDateColumn()
        enrollmentDate: Date
        
        @CreateDateColumn()
        createdAt: Date
        
        @CreateDateColumn()
        updatedAt: Date


    }