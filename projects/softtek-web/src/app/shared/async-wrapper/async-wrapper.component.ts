import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stk-web-async-wrapper',
  templateUrl: './async-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncWrapperComponent implements OnInit {
  @Input() dataName: string = '';

  @Input() data$: Observable<unknown[]> | undefined;
  // @Input() set data(value: Observable<unknown[]> | undefined) {
  //   if (!value) return;
  //   console.log('AsyncWrapperComponent.data', value);
  //   value.pipe(
  //     tap({
  //       error: (err) => {
  //         console.log('AsyncWrapperComponent.data.error', err);
  //         this.error$.next(err.message);
  //       },
  //     })
  //   );
  //   this.data$ = value;
  // }

  @Input() error$: Observable<string> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
