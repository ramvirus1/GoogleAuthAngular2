import {Component,AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {sharedService} from '../../Services/app.service';

@Component({
  templateUrl: './dashboard.module.html',
  styleUrls:   ['./dashboard.style.css'],
  providers:[sharedService]
})
export class DashboardModule implements AfterViewInit{
  constructor(private router:Router,private _shared:sharedService){}
  ngOnInit(){}
  signOutUser(){
      gapi.auth2.getAuthInstance().signOut().then(() => {
         this.router.navigateByUrl('Login');
      });
  };
  ngAfterViewInit(){
  }  
}

