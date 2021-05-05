import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TaskProfileDay1Module } from "./task-profile-day1/task-profile-day1.module";

@NgModule({
  imports: [BrowserModule, FormsModule, TaskProfileDay1Module],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
