import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterData: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterData).length) {
  //     return this.tasksService.getTasksWithFilters(filterData);
  //   }

  //   return this.tasksService.getAllTasks();
  // }

  // @Get(':id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch(':id/status')
  // updateStatusByTaskId(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateStatusByTaskId(id, status);
  // }

  // @Delete(':id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }
}
