/**
 * Actions send the type and payload to affect the store through reducers
 */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Users } from '../models/user';

@Injectable()
export class UserActions {

  static ADD_USER = 'ADD_USER';
  addUser(user: Users) : Action {
    return {
      type : 'ADD_USER',
      payload : user
    }
  }

  static DELETE_USER = 'DELETE_USER';
  deleteUser(user: Users) : Action {
      return {
        type : 'DELETE_USER',
        payload : user
      }
  }

  static EDIT_USER = 'EDIT_USER';
  editUser(user: Users) {
    return {
      type : 'EDIT_USER',
      payload : user
    }
  }

  static LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
  loadUsersSuccess(user: Users) : Action {
    return {
      type : UserActions.LOAD_USERS_SUCCESS,
      payload : user
    }
  }

  static ADD_UPDATE_USER_SUCCESS = 'ADD_UPDATE_USER_SUCCESS';
  addUpdateUserSuccess(user: Users) : Action {
    return {
      type : UserActions.ADD_UPDATE_USER_SUCCESS,
      payload : user
    }
  }

  static DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
  deleteUserSuccess(id: String) : Action {
    return {
      type : UserActions.DELETE_USER_SUCCESS,
      payload : id
    }
  }
}
