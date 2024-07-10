import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './task.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(
    title: string,
    description: string,
    status: string,
    dueDate: string,
  ): Task {
    const task: Task = {
      id: randomUUID(),
      title,
      description,
      status,
      dueDate,
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
    return task;
  }

  updateTask(
    id: string,
    title: string,
    description: string,
    status: string,
    dueDate: string,
  ): Task {
    const task = this.getTaskById(id);
    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;
    return task;
  }

  deleteTask(id: string): Task[] {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
    this.tasks.splice(taskIndex, 1);
    return this.tasks;
  }
}
