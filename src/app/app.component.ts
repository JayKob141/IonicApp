import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  Push,
  PushToken,
  Auth, User, UserDetails, IDetailedError
} from '@ionic/cloud-angular';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public push: Push,public  auth: Auth, public user: User) {
    let details: UserDetails = {'email': 'jaykobyou@gmail.com', 'password': 'somethingiswrong'};
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });

      this.push.rx.notification() .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });

      this.auth.signup(details).then(() => {
            // `this.user` is now registered
            console.log('user signed!')
      }, (err: IDetailedError<string[]>) => {
        for (let e of err.details) {
          if (e === 'conflict_email') {
            alert('Email already exists.');
          } else {
            // handle other errors
          }
        }
      });


    });
  }
}

