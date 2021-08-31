import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  ngOnInit(): void {}

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;

    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => {
      this.tasks.push(t);
    });
  }
}
