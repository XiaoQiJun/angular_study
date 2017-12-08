import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello my-app';
  date1: Date;

  ngOnInit() {
    let div = $(".container");
    console.log(div);
  }
}
