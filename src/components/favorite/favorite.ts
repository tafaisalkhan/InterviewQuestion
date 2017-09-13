import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { InterviewServiceProvider } from '../../providers/interview-service/interview-service';
import { InterviewConstantProvider } from '../../providers/interview-constant/interview-constant';
import {QuestionDataProvider } from '../../providers/question-data/question-data';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'favorite',
  templateUrl: 'favorite.html'
})
export class FavoriteComponent {
  
  platform: any;
  favoriteArray : any;
  sizeStore: string = "normal";
  itemsQuestion: any =[];
  itemsFavoite: QuestionDataProvider[] =[];
    constructor(public domSanitizer: DomSanitizer, private questionData: QuestionDataProvider, private interviewServiceProvider: InterviewServiceProvider, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private interviewConstantProvider: InterviewConstantProvider ) 
    {
      
      this.loadData();
    
    }
 
    loadData(){
      try{
        this.platform = this.interviewConstantProvider.device;
        this.storage.get('favoriteArrayStore').then((val) => {
          if (val != null){
            this.favoriteArray =  val;
            
          }
          

        });

        this.storage.get('sizeStore').then((val) => {
          if (val != null){
            this.sizeStore =  val;
          }
        });

       //Check for favorite
        this.storage.get('questionList').then((val) => {
          if (val != null){
            this.itemsQuestion =  val;
            for(let question in this.itemsQuestion){
              var questionData = new QuestionDataProvider();
              questionData.name = this.itemsQuestion[question].name;
              questionData.questions = [];
              for (let index in this.favoriteArray){
                console.log(this.itemsQuestion[question].questions.filter(question=> question.index == this.favoriteArray[index]).length);
                if(this.itemsQuestion[question].questions.filter(question=> question.index == this.favoriteArray[index]).length > 0){
                  var temp = this.itemsQuestion[question].questions.filter(question=> question.index == this.favoriteArray[index]);
                    temp[0].favorite = true;
                  questionData.questions.push(temp);
                }
                  
              }
              this.itemsFavoite.push(questionData);
            }
            console.log(this.itemsFavoite);
           
          }
        });
      }
      catch(e){
  
      }
    }
  
  unFavorite(index){
   
    var i = this.favoriteArray.indexOf(index);
    
    if(i != -1) {
      this.favoriteArray.splice(i, 1);
    }
    for(let data in this.itemsFavoite){
        console.log(data);
        var temp = this.itemsFavoite[data].questions.filter(quest => quest[0].index == index);
        if(temp.length > 0){
          temp[0][0].favorite = false;
        }
    }
    
    this.storage.set('favoriteArrayStore', this.favoriteArray);
  }

  favorite(index){
    this.favoriteArray.push(index);
    this.storage.set('favoriteArrayStore', this.favoriteArray);
    for(let data in this.itemsFavoite){
      console.log(data);
      var temp = this.itemsFavoite[data].questions.filter(quest => quest[0].index == index);
      if(temp.length > 0){
        temp[0][0].favorite = true;
      }
  }
  
    
  }

  shareQuestion(type, item){
    this.socialSharing.share(  item.question + "  <br/> " + item.answer       , "Interview Question  " + type , null); 
  }

  videoURL(item){
    console.log(item.video_url);
    if(item.video_url != "" || item.video_url != undefined){
      return this.domSanitizer.bypassSecurityTrustResourceUrl(item.video_url);
    }
   
   
  }

  }
  