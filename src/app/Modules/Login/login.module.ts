import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {sharedService} from '../../Services/app.service';

@Component({
  templateUrl: './login.module.html',
  styleUrls:   ['./login.style.css'],
  providers:[sharedService]
})
export class LoginModule {
    constructor(private _router:Router,private _shared:sharedService){}
    onGoogleSignInSuccess(event: GoogleSignInSuccess) {
      let _googleUser: gapi.auth2.GoogleUser = event.googleUser;
      let _profile: gapi.auth2.BasicProfile = _googleUser.getBasicProfile();
      this._router.navigateByUrl('Dashboard');
    }
}

