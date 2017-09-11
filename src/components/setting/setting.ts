import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingComponent {

  
  sizeSelected:string = "normal";
  constructor(private storage: Storage) {
    
    storage.get('sizeStore').then((val) => {
      if (val != null){
        this.sizeSelected =  val;
      }
    });

   
  }


  selectSizeOption(){
    this.storage.set('sizeStore', this.sizeSelected);
    console.log(this.sizeSelected);
  }

}
