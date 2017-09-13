import { Component } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { InterviewServiceProvider } from '../../providers/interview-service/interview-service';
import { InterviewConstantProvider } from '../../providers/interview-constant/interview-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Observable } from 'rxjs/Observable';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'question-list',
  templateUrl: 'question-list.html'
})
export class QuestionListComponent {
  item: any =[];
  platform: string;
  favoriteArray: any = [];
  sizeStore: string = "normal";
  type: string ;
  name: string;
  fileTxt: string = "";
  constructor(public domSanitizer: DomSanitizer, public navParams: NavParams, public navCtrl: NavController, private questionServiceProvider: InterviewServiceProvider, private storage: Storage,  private questionConstantProvider: InterviewConstantProvider, private admobFree: AdMobFree, private socialSharing: SocialSharing ) {
    this.item = this.navParams.get('item');
    this.name = this.item.name;
    this.type = this.item.type;
    console.log(this.item);
   
    this.loadQuestion();
  
  }

  loadQuestion(){
    this.platform = this.questionConstantProvider.device;
    this.storage.get('favoriteArrayStore').then((val) => {
      if (val != null){
        this.favoriteArray =  val;
        for (var item of this.item.questions){
          var i = this.favoriteArray.indexOf(item.index);
          if(i >= 0){
              item.favorite = true;
          }
         
        }
      }
    });

    this.storage.get('sizeStore').then((val) => {
      if (val != null){
        this.sizeStore =  val;
      }
    });

    
   
    console.log(this.item);

  }
  unFavorite(index){
    
    var i = this.favoriteArray.indexOf(index);
 
    if(i != -1) {
      this.favoriteArray.splice(i, 1);
    }
    var temp = this.item.questions.filter(question => question.index == index);
    temp[0].favorite = false;
    this.storage.set('favoriteArrayStore', this.favoriteArray);
  }

  favorite(index){
    this.favoriteArray.push(index);
    this.storage.set('favoriteArrayStore', this.favoriteArray);
    var temp = this.item.questions.filter(question => question.index == index);
    temp[0].favorite = true;
    
  }

  shareQuestion(index, type, item){
 
    this.socialSharing.share(  this.item.question + "  <br/> " + this.item.answer       , "Interview Question  " + this.name , null); 
  }

 
  videoURL(item){
    console.log(item);
    
    return this.domSanitizer.bypassSecurityTrustResourceUrl(item.video_url);
   
  }
  
}
