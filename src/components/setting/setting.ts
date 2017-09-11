import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


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
