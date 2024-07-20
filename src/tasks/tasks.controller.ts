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
import { Task } from './task.model';
import { RouteConstants } from '../constants/route-constants';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Post(RouteConstants.CREATE_TASK)
  async createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
    @Body('dueDate') dueDate: Date,
  ): Promise<Task> {
    return this.tasksService.createTask(title, description, status, dueDate);
  }
  @Get(RouteConstants.GET_ALL_TASKS)
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(RouteConstants.GET_TASK_BY_ID)
  async getTasksbyId(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Put(RouteConstants.UPDATE_TASK)
  async updateTask(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
    @Body('dueDate') dueDate: Date,
  ): Promise<Task> {
    return this.tasksService.updateTask(
      id,
      title,
      description,
      status,
      dueDate,
    );
  }

  @Delete(RouteConstants.DELETE_TASK)
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }
}
