import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'stk-web-async-wrapper',
  templateUrl: './async-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncWrapperComponent implements OnInit {
  @Input() dataTemplate!: TemplateRef<any>;
  @Input() dataName: string = '';

  @Input() public set data$(data$: Observable<unknown[]> | undefined) {
    if (!data$) return;
    this._data$ = data$.pipe(
      tap({
        error: (err) => this.error$.next(err.message),
      })
    );
  }
  public get data$(): Observable<unknown[]> | undefined {
    return this._data$;
  }
  private _data$: Observable<unknown[]> | undefined;

  public error$ = new BehaviorSubject('');
  constructor() {}

  public ngOnInit(): void {}
}
