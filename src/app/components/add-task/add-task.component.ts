import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Task> = new EventEmitter();

  title!: string;
  day!: string;
  reminder!: boolean;

  showAddTaskForm: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTaskForm = value;
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    const newTask = {
      title: this.title,
      day: this.day,
      reminder: this.reminder,
    };

    this.onSubmit.emit(newTask);

    this.title = '';
    this.day = '';
    this.reminder = false;
  }
}
