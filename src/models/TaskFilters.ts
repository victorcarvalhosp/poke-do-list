export interface ITaskFilters {
  title?: string;
  complete?: boolean;
  projectId?: string;
  periodFilter?: "today" | "week" | "month";
}

export class TaskFilters implements  ITaskFilters{
  title?: string;
  complete?: boolean;
  projectId?: string;
  periodFilter?: "today" | "week" | "month";

}
