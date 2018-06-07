import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/rx';
import { Store } from '@ngrx/store';

import { Users } from '../../models/user';
import { AppState } from '../../services/app-state';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HomePage {
    public users: Observable<Users[]>
  constructor(private navCtrl: NavController,
              private modalController: ModalController,
              private store: Store<AppState>
  ) {
      this.users = store.select(state => state.users)

  }

  showDetail(user) {
    console.log("open up the modal page to show detailed user(s)")
    let modal = this.modalController.create(DetailsPage, { user: user });
    modal.present();
  }

}
