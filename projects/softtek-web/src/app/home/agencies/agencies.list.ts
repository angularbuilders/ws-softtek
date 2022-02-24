import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-agencies',
  templateUrl: './agencies.list.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesList implements OnInit {
  @Input() agencies: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
