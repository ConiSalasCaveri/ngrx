import { createAction, props } from '@ngrx/store';
import { Person } from './ngrx-test.reducer';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const changeName = createAction('[Name Component] Update', props<{ person: Person }>());

