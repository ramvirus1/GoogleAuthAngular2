import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './dashboard.module.html',
  styleUrls:   ['./dashboard.style.css'],
  providers:[]
})
export class DashboardModule{
  constructor(private router:Router){}
  ngOnInit(){}
  signOutUser(){
      gapi.auth2.getAuthInstance().signOut().then(() => {
         this.router.navigateByUrl('Login');
      });
  };
}

