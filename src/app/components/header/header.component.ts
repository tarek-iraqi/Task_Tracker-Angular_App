import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTaskForm: boolean = false;

  constructor(private uiService: UiService, private router: Router) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTaskForm = value;
    });
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleShowAddTaskForm();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
