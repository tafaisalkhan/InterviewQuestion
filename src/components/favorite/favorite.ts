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


/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
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
    constructor(private questionData: QuestionDataProvider, private interviewServiceProvider: InterviewServiceProvider, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private interviewConstantProvider: InterviewConstantProvider ) 
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
       
        this.storage.get('questionList').then((val) => {
          if (val != null){
            this.itemsQuestion =  val;
            for(let question in this.itemsQuestion){
              //console.log(question);
              //console.log(this.itemsQuestion[question]);
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
    //this.favoriteArray.slice(this.duaIndex);
    var i = this.favoriteArray.indexOf(index);
    //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
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
    //var temp = this.item.questions.filter(question => question.index == index);
    //temp[0].favorite = false;
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
   // var temp = this.item.questions.filter(question => question.index == index);
   // temp[0].favorite = true;
    
  }

  shareQuestion(type, item){
    this.socialSharing.share(  item.question + "  <br/> " + item.answer       , "Interview Question  " + type , null); 
  }


  }
  