import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AddmoneyPage } from '../addmoney/addmoney';
/**
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {

  user: any;
  amount: any = 0;
  url: any;

  loaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,
    public sanitizer: DomSanitizer) {
      this.amount = this.navParams.get('amount');
      if(!this.amount){
        this.amount= 1000;
      }
  }

  ionViewDidEnter() {
    this.loaded = true;
  }

  ngOnInit(){
    this.url =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.ipayos.com/mobile/getPayment.php?businessId=<Your Business ID>&amount='+ this.amount);
  }

  dismiss() {
  		this.viewCtrl.dismiss();
  	}
  getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  complete(){
    this.navCtrl.setRoot(AddmoneyPage);
  }

}
