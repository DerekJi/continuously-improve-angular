import { Component, Input, OnInit } from "@angular/core";
import { ITask } from "../core/models/task.interface";

@Component({
  selector: "app-task-profile-d1",
  templateUrl: "./task-profile.component.html",
  styleUrls: ["./task-profile.component.css"]
})
export class TaskProfileD1Component implements OnInit {
  @Input() task: ITask;
  constructor() {}

  ngOnInit() {}
}
