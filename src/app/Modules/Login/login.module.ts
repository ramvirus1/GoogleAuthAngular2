import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleSignInSuccess} from 'angular-google-signin';

@Component({
  templateUrl: './login.module.html',
  styleUrls:   ['./login.style.css'],
  providers:[]
})
export class LoginModule {
  private myClientId: string = 'client_ID goes here';
  constructor(private _router:Router){}
  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let _googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let _profile: gapi.auth2.BasicProfile = _googleUser.getBasicProfile();
    this._router.navigateByUrl('Dashboard');
  }
}

