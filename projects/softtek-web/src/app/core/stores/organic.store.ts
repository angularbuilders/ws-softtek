import { Action, MolecularStore } from './molecular.store';

export type Reducer<T> = (state: T, payload: any) => T;

export class OrganicStore<T> extends MolecularStore<T> {
  private readonly reducers: Map<string, Reducer<T>> = new Map();

  public addReducer(actionType: string, reducer: Reducer<T>): void {
    this.reducers.set(actionType, reducer);
  }

  public override dispatch(action: Action): void {
    const reducer = this.reducers.get(action.type);
    if (reducer) {
      const previous = super.get();
      const next = reducer(previous, action.payload);
      super.apply({ action, previous, next });
    } else {
      super.dispatch(action);
    }
  }
}
