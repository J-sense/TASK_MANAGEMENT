export interface ITask {
  id: string; // Unique identifier
  title: string; // Title of the task
  description: string; // Detailed description of the task
  dueDate: string; // Due date in ISO format or another standard format
  isCompleted: boolean; // Status of task completion
  priority: "High" | "Medium" | "Low"; // Priority level
}
