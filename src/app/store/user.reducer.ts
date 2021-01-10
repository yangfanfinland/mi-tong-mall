import { createReducer, on } from '@ngrx/store';
import { add, remove } from './user.actions';

export const initialState = {};

const _userReducer = createReducer(
    initialState,
    on(add, (state, { payload }) => {
        return {
            ...state,
            ...payload
        }
    }),
    on(remove, (state) => {
        return {
            ...state
        }
     })
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action)
}