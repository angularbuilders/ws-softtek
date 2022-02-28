import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Agency } from '../../core/models/agency';

@Component({
  selector: 'stk-web-agencies',
  templateUrl: './agencies.list.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesList implements OnInit {
  @Input() agencies: Agency[] = [];
  constructor() {}

  ngOnInit(): void {}
}
