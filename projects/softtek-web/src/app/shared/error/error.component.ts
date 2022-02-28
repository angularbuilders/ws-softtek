import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-error',
  templateUrl: './error.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  @Input() public dataName = '';
  @Input() public error = '';
  constructor() {}

  ngOnInit(): void {}
}
