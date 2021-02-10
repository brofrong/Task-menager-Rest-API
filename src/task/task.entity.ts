 import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

 @Entity()
 export class Task {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     username: string;

     @Column()
     taskTitle: string;

     @Column()
     taskDescription: string;
 }