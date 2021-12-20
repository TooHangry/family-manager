import { Component, OnInit } from '@angular/core';
import { closeModal, openModal } from 'src/app/utils/modal.utils';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  tasks = [
    {
      id: 0,
      state: 0,
      title: "Snoozed Task",
    },
    {
      id: 1,
      state: 1,
      title: "TODO Task",
    },
    {
      id: 2,
      state: 2,
      title: "Active Task",
    },
    {
      id: 3,
      state: 3,
      title: "Resolved Task",
    },
    {
      id: 4,
      state: 4,
      title: "Complete Task",
    },
  ]

  ngOnInit(): void {
  }

  getSnoozedTasks(): any[] {
    return this.tasks.filter(t => t.state === 0);
  }

  getToDoTasks(): any[] {
    return this.tasks.filter(t => t.state === 1);
  }

  getInProgressTasks(): any[] {
    return this.tasks.filter(t => t.state === 2);
  }

  getResolvedTasks(): any[] {
    return this.tasks.filter(t => t.state === 3);
  }

  getCompletedTasks(): any[] {
    return this.tasks.filter(t => t.state === 4);
  }

  advance(task: any): void {
    this.tasks.forEach(t => {
      if (t.id === task.id)
        t.state += 1;
    });
  }

  deAdvance(task: any): void {
    this.tasks.forEach(t => {
      if (t.id === task.id)
        t.state -= 1;
    });
  }


  openAddTaskModal(): void {
    const modal = document.getElementById('new-task-modal') as HTMLDivElement;
    openModal(modal);
  }

  closeAddTaskModal(): void {
    const modal = document.getElementById('new-task-modal') as HTMLDivElement;
    closeModal(modal);
  }
}
