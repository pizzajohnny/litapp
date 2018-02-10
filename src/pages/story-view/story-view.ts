import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, NavParams, Platform, PopoverController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import { STORYSTYLEOPTIONS_KEY, HISTORY_KEY } from '../../providers/db';
import { Stories } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Story } from '../../models/story';

@IonicPage()
@Component({
  selector: 'page-story-view',
  templateUrl: 'story-view.html'
})
export class StoryViewPage {

  Math: Math = Math;

  slides: any[] = [];
  dir: string = 'ltr';
  slidesPerView: number = 1;
  fullscreen = false;
  firstTimeNextPage = true;
  story: Story;
  @ViewChild("slidesElement") slidesElement: Slides;
  @ViewChild("range") range: any;

  settings = {
    fontsize: 15,
    lineheight: 21.5,
    color: "white",
    background: "black",
    font: "sans-serif",
    textalign: "justify"
  }

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public storage: Storage,
    public user: User,
    public stories: Stories,
    private popoverCtrl: PopoverController,
    private androidFullScreen: AndroidFullScreen,
    translate: TranslateService,
    navParams: NavParams
  ) {
    this.dir = platform.dir();
    this.slidesPerView = platform.isPortrait() ? 1 : 2;
    this.story = navParams.get('story');

    this.storage.get(STORYSTYLEOPTIONS_KEY).then((value) => {
      if (value)
        this.settings = value;
    });

    // get story from server
    if (!this.story.downloaded) {

      this.stories.getById(this.story.id).subscribe((story) => {
        if (!story) {
          this.navCtrl.pop();
          return;
        }
        
        // add details & content to db
        this.story.series = story.series;
        this.story.length = story.length;
        this.story.tags = story.tags;
        this.story.content = story.content;
        this.story.downloaded = true;
        this.storage.set(HISTORY_KEY+"_"+this.story.id, this.story);
        
        this.addSlides();      
      });

    } else {
      this.addSlides();      
    }

    // add to history
    this.storage.get(HISTORY_KEY).then((history) => {
      if (!history) history = [];

      if (history.indexOf(this.story.id) > -1)
        history.splice(history.indexOf(this.story.id),1);

      history.push(this.story.id);
      this.storage.set(HISTORY_KEY, history);
    });

  }

  private addSlides() {
    this.story.content.forEach((item, index) => this.slides.push({
      content: item,
      page: index,
      desktoppage: index
    }));
  }

  ionViewWillEnter() {
    if (this.story.currentpage > 0 && this.slidesElement )
      this.slidesElement.slideTo(this.story.currentpage, 0);
  }

  clickSlides(event) {

    if ( event.clientX < this.platform.width()/4 ) {
      // clicking in left most 25%
      this.slidesElement.slidePrev();

    } else if ( event.clientX > 3*this.platform.width()/4 ) {
      // clicking in right most 25%
      if (this.firstTimeNextPage)
        this.immersive();
      this.slidesElement.slideNext();
      this.firstTimeNextPage = false;

    } else {
      this.immersive();
    }
      
  }

  private immersive() {
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => {
        if (this.fullscreen)
          this.androidFullScreen.immersiveMode()
        else
          this.androidFullScreen.showSystemUI()
      })
      .catch((error: any) => console.log(error));
    this.fullscreen = !this.fullscreen;
  }

  showPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create("StoryPopover", {
      settings: this.settings
    });

    popover.present({
      ev: ev
    });

    popover.onDidDismiss(() => {
      this.storage.set(STORYSTYLEOPTIONS_KEY, this.settings)
    });
  }

  showInfo(story: Story) {
    this.navCtrl.push('StoryDetailPage', {
      story: story
    });
  }

  openListPicker(ev: UIEvent) {
    let popover = this.popoverCtrl.create("BookmarkPopover", {
      story: this.story
    });

    popover.present({
      ev: ev
    });
  }

  slideChanged() {
    let currentIndex = this.slidesElement.getActiveIndex();
    if (currentIndex >= this.slides.length) {
      // TODO: autoload next story in series?
      return;
    }

    this.storage.get(HISTORY_KEY+"_"+this.story.id).then((value) => {
      value['currentpage'] = currentIndex;
      this.storage.set(HISTORY_KEY+"_"+this.story.id, value);
    });
    this.range.setValue(currentIndex+1);
  }

  ionViewWillLeave() {
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.showSystemUI())
      .catch((error: any) => console.log(error));
  }

}
