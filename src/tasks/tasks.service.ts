import { Injectable, NotFoundException } from '@nestjs/common';

import { Task, TaskDocument } from './task.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async createTask(
    title: string,
    description: string,
    status: string,
    dueDate: Date,
  ): Promise<Task> {
    const newTask = await new this.taskModel({
      title,
      description,
      status,
      dueDate,
    });
    console.log(newTask);
    return newTask.save();
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
    return task;
  }

  async updateTask(
    id: string,
    title: string,
    description: string,
    status: string,
    dueDate: Date,
  ): Promise<Task> {
    const updatedTask = await this.taskModel
      .findByIdAndUpdate(
        id,
        { title, description, status, dueDate },
        { new: true },
      )
      .exec();
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
    return updatedTask;
  }

  async deleteTask(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
    return deletedTask;
  }
}
