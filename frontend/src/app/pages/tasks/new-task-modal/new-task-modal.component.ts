import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.scss']
})
export class NewTaskModalComponent implements OnInit {
  @Output() closeModal: EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickCloseModal(): void {
    // Reset Modal Content Here
    this.closeModal.emit(null);
  }
}
