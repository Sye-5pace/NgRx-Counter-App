import { createAction, props } from '@ngrx/store';

// Basic Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

// Action with Payload
export const setInitialValue = createAction(
  '[Counter] Set Initial Value',
  props<{ count: number }>()
);

// Custom Action Creators with Payloads
export const incrementBy = createAction(
  '[Counter] Increment By',
  props<{ value: number }>()
);

export const setTo = createAction(
  '[Counter] Set To',
  props<{ value: number }>()
);

export const multiplyBy = createAction(
  '[Counter] Multiply By',
  props<{ factor: number }>()
);

export type CounterActions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof setInitialValue>
  | ReturnType<typeof incrementBy>
  | ReturnType<typeof setTo>
  | ReturnType<typeof multiplyBy>;
