import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(data: Task) {
    this.onDeleteTask.emit(data);
  }

  onToggle(data: Task) {
    this.onToggleTaskReminder.emit();
  }
}
