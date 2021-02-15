import {Component} from '@angular/core';



@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styles: ['h1 {color: blue}']
})

export class StoreComponent  {

    private isDislayButtonText = false;
    // private isTimeOutEnabled = false;
    constructor() {

    }


    onSubmit() {
      if (!this.isDislayButtonText) {
          this.isDislayButtonText = false;
      }
      setTimeout(() => {
          this.isDislayButtonText = true;
        }, 20000);

    }

}
