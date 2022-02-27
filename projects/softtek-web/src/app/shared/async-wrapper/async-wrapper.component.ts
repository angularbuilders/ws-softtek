import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stk-web-async-wrapper',
  templateUrl: './async-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncWrapperComponent implements OnInit {
  @Input() dataTemplate!: TemplateRef<any>;
  @Input() dataName: string = '';

  @Input() data$: Observable<unknown[]> | undefined;

  @Input() error$: Observable<string> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
