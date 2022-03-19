import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export type Selector<T> = (state: T) => unknown;

export class AtomicStore<T> {
  protected store$ = new BehaviorSubject<T>(this.initialState);

  constructor(private readonly initialState: T) {}

  public set(state: T): void {
    this.store$.next(this.clone(state));
  }

  public get(): T {
    return this.clone(this.store$.getValue());
  }

  public get$(): Observable<T> {
    return this.store$.asObservable().pipe(map((state) => this.clone(state)));
  }

  public select$(selector: Selector<T>): Observable<unknown> {
    return this.get$().pipe(map(selector), distinctUntilChanged());
  }

  protected clone(state: T): T {
    return { ...state };
  }
}
