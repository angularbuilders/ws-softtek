import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-header',
  templateUrl: './header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
