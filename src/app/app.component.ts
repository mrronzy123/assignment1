import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment1';
  public inputJson = "";
  public result = "";
  
  onClickMe() {
    let parsedJSON = JSON.parse(this.inputJson);
    console.log(parsedJSON);
    
  }
  
}
