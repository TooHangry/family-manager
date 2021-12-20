import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  nextState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    (document.getElementById(`num${1}`) as HTMLInputElement).select();
  }

  validate(value: string, inputNum: number): void {
    const val = (document.getElementById(`num${inputNum}`) as HTMLInputElement).value as string;
    if (val.length > 0) {
      (document.getElementById(`num${inputNum}`) as HTMLInputElement).value = val.length > 0 ? val[0] : '';
      if (inputNum < 4) {
        setTimeout(() => {
          (document.getElementById(`num${++inputNum}`) as HTMLInputElement).select();
        }, 50)
        this.nextState.next(false);
      } else {
        (document.getElementById(`num${4}`) as HTMLInputElement).blur();
        this.nextState.next(true);
      }
    }
  }

  selectInput(): void {
    if (!this.loading.value) {
      for (let i = 1; i < 5; ++i) {
        (document.getElementById(`num${i}`) as HTMLInputElement).value = '';
        (document.getElementById(`num${i}`) as HTMLInputElement).blur();
      }
      (document.getElementById(`num${1}`) as HTMLInputElement).select();
    }
  }

  join(): void {
    this.loading.next(true);
  }
}
