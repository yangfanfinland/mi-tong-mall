import { createAction, props } from '@ngrx/store';
export const add = createAction('[User Component] Add', props<{ payload: any }>());
export const remove = createAction('[User Component] Remove');