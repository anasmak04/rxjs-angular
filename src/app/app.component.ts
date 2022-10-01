import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'rxjs-fundamentals';

  // RandomUsers = [
  //  {name : "anas", job : "Backend developer"},
  //   {name : "bilal", job : "software enginner"},
  //   {name : "anas elmakhloufi", job : "front-end developer"}
  // ]; 

  // PostArrayObservable = from(this.RandomUsers);

  // constructor(){
  //   this.PostArrayObservable.subscribe({
  //     next : (data) => console.log(data),
  //     error : (error) => console.log("error from rxjs :" +  error),
  //     complete : () => console.log("complete data done!")
  //   })
  // }


  // ngAfterViewInit() {
  //   fromEvent(document.getElementById('click-button')!, 'click').subscribe({
  //     next : (data) => console.log(data),
  //     error : (error) => console.log("error from rxjs :" +  error),
  //     complete : () => console.log("complete data done!")
  //   })

  // }
}
