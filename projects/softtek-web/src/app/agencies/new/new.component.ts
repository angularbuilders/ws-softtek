import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stk-web-new',
  templateUrl: './new.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
