import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-loading',
  templateUrl: './loading.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input() public dataName = '';
  constructor() {}

  ngOnInit(): void {}
}
