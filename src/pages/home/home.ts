import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: string[];
  public items: any;
  errorMessage: string;
  totalRecords: number;

  constructor(public navCtrl: NavController, public rest: RestApiProvider) {

  }
  
  getUsers() {
    this.rest.getUsers()
       .subscribe(
         users => this.users = users,
         error =>  this.errorMessage = <any>error);
  }

  getEmail(email: string) {
    this.rest.getUsers()
       .subscribe(
         users => (this.users = users.filter(user => user.email === email)),
         error =>  this.errorMessage = <any>error);
	console.log(this.rest);
  }
  
  /*ionViewDidLoad() {
    this.getCountries();
  }*/

}
