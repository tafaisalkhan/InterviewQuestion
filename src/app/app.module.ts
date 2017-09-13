import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { VideoPlayer } from '@ionic-native/video-player';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuComponent } from '../components/side-menu/side-menu'
import { MainMenuComponent } from '../components/main-menu/main-menu'
import { QuestionListComponent } from '../components/question-list/question-list'
import { SettingComponent } from '../components/setting/setting'
import { AboutComponent } from '../components/about/about'
import { FavoriteComponent } from '../components/favorite/favorite'
import { InterviewConstantProvider } from '../providers/interview-constant/interview-constant';
import { InterviewServiceProvider } from '../providers/interview-service/interview-service';
import { Media, MediaObject } from '@ionic-native/media';
import { QuestionDataProvider } from '../providers/question-data/question-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuComponent,
    MainMenuComponent,
    QuestionListComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuComponent,
    MainMenuComponent,
    QuestionListComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Media,
    AdMobFree,
    VideoPlayer,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InterviewConstantProvider,
    InterviewServiceProvider,
    QuestionDataProvider,
  
  ]
})
export class AppModule {}
