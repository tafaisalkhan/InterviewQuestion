import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { InterviewServiceProvider } from '../../providers/interview-service/interview-service';
import { InterviewConstantProvider } from '../../providers/interview-constant/interview-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { QuestionListComponent } from "../question-list/question-list";


@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuComponent {

  dataList: any = [];
  version: any;
  platform: string;

   
  constructor(public navCtrl: NavController, private questionServiceProvider: InterviewServiceProvider, private storage: Storage, public plt: Platform, private questionConstantProvider: InterviewConstantProvider, private admobFree: AdMobFree ) {
    this.loadDua();
  
  }

loadDua(){
    //this.storage.set('questionList', null);
    this.storage.get('questionList').then((val) => {
      if (val != null){
        this.dataList =  val;
        
      }
      else
      {
        this.questionServiceProvider.getQuestion()
          .subscribe(data => {
            this.dataList = data['questions'].type ;
            this.version = data['questions'].version;
            console.log(this.dataList);
            this.storage.set('questionList', this.dataList);
            },
          (err) => {console.log(err);      
            }
            );
          }
    });

    this.storage.get('version').then((val) => {
      if (val != null){
        this.version =  val;
        this.questionServiceProvider.getQuestion()
        .subscribe(data => {
          if (this.version != data['questions'].version){
            this.dataList = data['questions'].type ;
            this.version = data['questions'].version;
            console.log(this.dataList);
            this.storage.set('questionList', this.dataList);
            this.storage.set('version', data['questions'].version);

          }

          },
        (err) => {console.log(err);
           
          }
          );
        
      }
     
    });
    if (this.plt.is('iphone')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.questionConstantProvider.device= "small";
      this.platform = "small";
    }
    else if (this.plt.is('ipad')) {
      // This will only print when on iOS
      console.log('I am an ipad device!');
      this.questionConstantProvider.device= "large";
      this.platform = "large";
    }

    else if (this.plt.is('tablet')) {
      // This will only print when on iOS
      console.log('I am an tablet device!');
      this.questionConstantProvider.device= "large";
      this.platform = "large";
    }
    else if (this.plt.is('mobile')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.questionConstantProvider.device= "small";
      this.platform = "small";
    }
    else{
      console.log('I am an browser device!');
    }
 

  }

  itemTapped(evnet :any , item: any){
    
    this.navCtrl.push(QuestionListComponent, {
      item: item
    });

}

}
