import {Injectable} from '@angular/core';

@Injectable()

export class sharedService{
    constructor(){}
    userDetails:{};
    saveUserDetails(details){
        this.userDetails = details;
    }
    getUserDetails(){
        return this.userDetails;
    }
}