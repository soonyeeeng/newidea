import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'password',
  templateUrl: 'password.html' 
})
export class Password {
  constructor(private nav: NavController) {
 
  }

private ListOfPassword = [
    {account:"Gmail",userId:"xxxxxxx@gmail.com",password:"xxxxxxxxx", accountType:"Email"},

]
}
