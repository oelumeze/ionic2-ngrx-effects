
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/app-state'
import { UserActions } from '../../actions/user.actions'

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

    public user:any = {};
    public isNew = true;
    public action = 'Add';

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private store: Store<AppState>,
        private userActions: UserActions
    ) {

    }

    ionViewWillEnter () {
      let editUser = this.navParams.get('user'); //get current selected user
      if (editUser) {
        this.isNew = false;
        this.user = editUser;
        this.action = 'Edit'
      }
    }

    save() {

      //if its a new user
      if(this.isNew) {
        this.store.dispatch(this.userActions.addUser(this.user))
      }else {
        this.store.dispatch(this.userActions.editUser(this.user))
      }

      this.dismiss()
    }

    delete() {
      this.store.dispatch(this.userActions.deleteUser(this.user));
      this.dismiss()
    }

    dismiss() {
      this.viewCtrl.dismiss()
    }
}
