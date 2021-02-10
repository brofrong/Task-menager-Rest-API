import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly tasksRepository: Repository<Task>,
    ){}

    create(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = new Task();
        task.username = createTaskDto.username;
        task.taskTitle = createTaskDto.taskTitle;
        task.taskDescription = createTaskDto.taskDescription;

        return this.tasksRepository.save(task);
    }
 
    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>{
        return this.tasksRepository.save({...updateTaskDto,id : Number(id) });
    }

    async findAll(): Promise<Task[]>{
        return this.tasksRepository.find();
    }

    findOne(id: string): Promise<Task> {
        return this.tasksRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.tasksRepository.delete(id);
    }
}