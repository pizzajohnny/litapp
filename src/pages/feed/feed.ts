import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FeedItem } from '../../models/feeditem';
import { Author } from '../../models/author';
import { Feed } from '../../providers/providers';
import { FEED_KEY } from '../../providers/db';

@IonicPage({priority: 'high'})
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  feed: FeedItem[] = [];
  enableInfinite = true;
  lastviewedid = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public f: Feed,
  ) {
    Promise.all([this.f.onReady(), this.storage.get(FEED_KEY)]).then((values) => {
      this.lastviewedid = values[1];
      this.refresh(null, true)
    });
  }

  refresh(event?, showloader?: boolean) {
    this.enableInfinite = true;
    this.f.query(undefined, showloader).subscribe((data) => {
      if (data && data.length) {
        this.feed = data;
        this.storage.set(FEED_KEY, data[0].id);
        this.f.feedbadge = "";
      }
      if (event) event.complete();
    });
  }

  loadMore(event) {
    if (!this.feed) {
      event.complete()
      return;
    }

    this.f.query(this.feed[this.feed.length-1].id, false).subscribe((data) => {
      if (data) {
        if (!data.length) {
          event.enable(false);
          return;
        }
        data.forEach(i => this.feed.push(i));
      }
      this.enableInfinite = false;
    });
  }

  openFollowing() {
  	this.navCtrl.push('FollowingPage');
  }

  openAuthor(author: Author, event?) {
    if (event)
      event.stopPropagation();
    this.navCtrl.push('AuthorPage', {
      author: author
    });
  }

}
