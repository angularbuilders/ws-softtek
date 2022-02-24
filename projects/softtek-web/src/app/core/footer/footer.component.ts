import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stk-web-footer',
  templateUrl: './footer.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
