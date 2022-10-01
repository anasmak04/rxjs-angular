import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( ) { }

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for(let i = 0 ; i < 5 ; i ++){

        
        console.log(`number is  : ${observer.next(i)}`)

      }

      observer.complete();
    })

      let observer = {
        next: (data : number) => console.log(data),
        error: (error : string) => console.log(error),
        complete : () => console.log("complete process data")
      };
      
        newObservable.subscribe(observer)
  }


}
