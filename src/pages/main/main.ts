import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
	
  posts: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: PostsProvider) {
  }

  getPosts() {
    this.rest.getPosts()
       .subscribe(
         posts => this.posts = posts,
         error =>  this.errorMessage = <any>error);
  }
  
  ionViewDidLoad() {
    this.getPosts();
  }  

}
