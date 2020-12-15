import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { AddCardPage } from '../add-card/add-card';

@Component({
  selector: 'page-addmoney',
  templateUrl: 'addmoney.html'
})
export class AddmoneyPage {
  url: any;
  user: any = {
    amount: 100
  };

  commision: any = {
    high: 3,
    low: 4,
    withdrawal: 1,
    tranferFee: 50
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addMoney(amount){
    let modal = this.modalCtrl.create(AddCardPage, {amount: amount});
    modal.present();
  }

}
