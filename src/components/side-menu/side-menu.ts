import { Component, ViewChild } from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { MainMenuComponent } from "../main-menu/main-menu";
import { SettingComponent } from "../setting/setting";
import { AboutComponent } from "../about/about";
import { FavoriteComponent } from "../favorite/favorite";

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  text: string;
  rootPage: any = MainMenuComponent;

  constructor(navCtrl: NavController) {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
  
  }

openPage(page) {
  if(page == 'menu'){
      this.nav.setRoot(MainMenuComponent);
  }
  else if (page == 'setting'){
    this.nav.setRoot(SettingComponent);
  }
  else if (page == 'about'){
    this.nav.setRoot(AboutComponent);
  }
  else if (page == 'favorite'){
    this.nav.setRoot(FavoriteComponent);
  }


}


}
