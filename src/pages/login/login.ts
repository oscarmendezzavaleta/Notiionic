import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login() {
    try {

      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      result.then((user) => {
        console.log(user);

        this.navCtrl.setRoot(HomePage);

      }).catch((e) => {
        console.log(e)
      })


    }
    catch (e) {
      console.log(e);
    }

  }

  register() {
    this.navCtrl.push("RegisterPage");
  }
}
