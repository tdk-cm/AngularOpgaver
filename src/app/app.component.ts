import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  selectedPage = 1;

  constructor(public router: Router) {

  }

  selectionMade(id: number){
    this.selectedPage = id;
  }

  getPage(){
    switch(this.selectedPage){
      case 1:
        return "<app-firkanter-display></app-firkanter-display>"
        break;
        case 3:
          return "<app-observable-environment></app-observable-environment>"
          break;
          default:
            return "<></>";
    }
  }

}
