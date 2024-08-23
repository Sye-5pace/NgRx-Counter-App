// counter.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};


const _storeReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => ({ ...state, count: state.count + 1 })),
  on(CounterActions.decrement, state => ({ ...state, count: state.count - 1 })),
  on(CounterActions.reset, state => ({ ...state, count: 0 })),
  on(CounterActions.setInitialValue, (state, { count }) => ({ ...state, count })),
  on(CounterActions.incrementBy, (state, { value }) => ({ ...state, count: state.count + value })),
  on(CounterActions.setTo, (state, { value }) => ({ ...state, count: value })),
  on(CounterActions.multiplyBy, (state, { factor }) => ({ ...state, count: state.count * factor }))
);


export function storeReducer(state: CounterState | undefined, action: Action) {
  return _storeReducer(state, action);
}
