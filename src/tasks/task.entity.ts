import { UUID } from 'crypto';

export class Task {
  id: UUID;
  title: string;
  description: string;
  status: string;
  dueDate: string;
}
