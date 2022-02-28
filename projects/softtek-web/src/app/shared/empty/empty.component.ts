import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-empty',
  templateUrl: './empty.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent implements OnInit {
  @Input() dataName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
