import { Component, VERSION } from "@angular/core";
import { ITask } from "./task-profile-day1/core/models/task.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  taskD1: ITask = {
    key: "CIA-01",
    subject: "Build Task Profile Component to Show Details",
    status: "to-do",
    createdBy: "Manager",
    reportedTo: "Manager",
    createdOn: new Date(),
    assignee: "Bob",
    description: "Build a component to show all the details of a Task "
  };
}
