export interface ITask {
  key: string;
  subject: string;
  status: "to-do" | "in-progress" | "testing" | "done";

  createdBy: string;
  createdOn: Date;

  reportedTo: string;
  assignee?: string;

  description?: string;
}
