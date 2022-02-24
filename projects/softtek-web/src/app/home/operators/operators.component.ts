import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-operators',
  templateUrl: './operators.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorsComponent implements OnInit {
  @Input()
  public operators: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
