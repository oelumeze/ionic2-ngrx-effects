/**
 * reducers are the functions that affect the store state based on the action type and payload 
 */

import { Action, ActionReducer } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';

let nextId = 0;

export function UserReducers(state = [], action) {
    switch(action.type) {
      case UserActions.ADD_USER: //if a user is added
          return [...state, Object.assign({}, action.payload, { id : nextId++})];
      case UserActions.DELETE_USER:
          return state.filter(user => user.id !== action.payload.id);
      case UserActions.EDIT_USER:
          return state.map(user => user.id === action.payload.id ? Object.assign({}, user, action.payload) : user)
      default:
        return state;
    }
}