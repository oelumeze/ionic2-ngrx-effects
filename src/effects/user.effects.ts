/**
 * it listens for action dispatch to the store and take effect/responds
 */
import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/rx';

import { UserService } from '../services/user.service';
import { Users } from '../models/user';
import { UserActions } from '../actions/user.actions';

@Injectable()

export class UserEffects {

  constructor(
    private actions$ : Actions,
    private db : UserService,
    private useractions : UserActions 
  ) {}

  //  @Effect() addBirthday$ = this.actions$
  //       .ofType(UserActions.ADD_USER)
  //       .map<Users>(toPayload)
  //       .mergeMap(user => this.db.add(user));
  
}
