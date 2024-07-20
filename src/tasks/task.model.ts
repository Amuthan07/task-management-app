import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Task {
  // @Prop({ type: mongoose.Types.ObjectId, auto: true })
  // _id: mongoose.Types.ObjectId;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  status: string;
  @Prop({ required: true })
  dueDate: Date;
}
export type TaskDocument = Task & Document;
export const taskSchema = SchemaFactory.createForClass(Task);
