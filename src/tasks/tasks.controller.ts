import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { RouteConstants } from '../constants/route-constants';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Post(RouteConstants.CREATE_TASK)
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
    @Body('dueDate') dueDate: string,
  ): Task {
    return this.tasksService.createTask(title, description, status, dueDate);
  }
  @Get(RouteConstants.GET_ALL_TASKS)
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(RouteConstants.GET_TASK_BY_ID)
  getTasksbyId(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Put(RouteConstants.UPDATE_TASK)
  updateTask(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
    @Body('dueDate') dueDate: string,
  ): Task {
    return this.tasksService.updateTask(
      id,
      title,
      description,
      status,
      dueDate,
    );
  }

  @Delete(RouteConstants.DELETE_TASK)
  deleteTask(@Param('id') id: string): Task[] {
    return this.tasksService.deleteTask(id);
  }
}
