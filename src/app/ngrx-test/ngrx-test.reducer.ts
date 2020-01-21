import { createReducer, on, State, Action } from '@ngrx/store';
import { decrement, increment, reset, changeName } from './ngrx-test.actions';

export interface Person {
  name: string;
  age: number;
}

export const initialState = 0;

const actionCounterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return actionCounterReducer(state, action);
}

export const initialPerson: Person = {
  name: 'none',
  age: 0
};

const changeNameReducer = createReducer(initialPerson,
  on(changeName, (state, { person }) => ({ ...state, name: person.name })));

export function reducer(state, action) {
  return changeNameReducer(state, action);
}
