import { Observable, Subject } from 'rxjs';
import { AtomicStore } from './atomic.store';

export type Action = { type: string; payload: unknown };
export type Change<T> = { action: Action; previous: T; next: T };

export class MolecularStore<T> extends AtomicStore<T> {
  protected changes$ = new Subject<Change<T>>();

  public override set(state: T): void {
    throw new Error('Only AtomicStore allows direct changes to the store.');
  }

  public getChanges$(): Observable<Change<T>> {
    return this.changes$.asObservable();
  }

  public dispatch(action: Action): void {
    const previous = super.get();
    const next = action.payload as T;
    this.apply({ action, previous, next });
  }

  protected apply(change: Change<T>) {
    super.set(change.next);
    this.changes$.next(change);
  }
}
