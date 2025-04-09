export class CreateTaskDto {
  name: string;
  description?: string;
  isCompleted?: boolean;
}

export class UpdateTaskDto {
  name?: string;
  description?: string;
  isCompleted?: boolean;
}