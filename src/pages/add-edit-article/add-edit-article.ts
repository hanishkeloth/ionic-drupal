import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';

/**
 * Generated class for the AddArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-edit-article',
  templateUrl: 'add-edit-article.html',
})
export class AddEditArticlePage {

  title: string;
  body: string;
  article: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public articleProvider: ArticlesProvider) {
    let nid = this.navParams.get('nid');
    this.article = null;
    if(nid) {
      this.article = this.articleProvider.getArticle(nid);
      this.title = this.article.title;
      this.body = this.article.body;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticlePage');
  }

  dissmiss() {
    this.viewCtrl.dismiss();
  }

  saveArticle() {
    this.articleProvider.addArticle(this.title, this.body);
    this.dissmiss();
  }

  editArticle() {
    this.articleProvider.editArticle(this.article.nid, this.title, this.body);
    this.dissmiss();
  }
}
