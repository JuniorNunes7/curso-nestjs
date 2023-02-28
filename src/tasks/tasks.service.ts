import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasksEntityRepository: TasksRepository) {}

  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // public getTasksWithFilters(filterData: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterData;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       return task.title.includes(search) || task.description.includes(search);
  //     });
  //   }

  //   return tasks;
  // }

  // public getTaskById(id: string): Task {
  //   const task = this.tasks.find((task) => task.id === id);

  //   if (!task) {
  //     throw new NotFoundException(`Task with ID "${id}" not found.`);
  //   }

  //   return task;
  // }

  // public createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);
  //   return task;
  // }

  // public updateStatusByTaskId(id: string, status: TaskStatus): Task {
  //   const task: Task = this.getTaskById(id);
  //   task.status = status;

  //   return task;
  // }

  // public deleteTask(id: string): void {
  //   const found: Task = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
}
