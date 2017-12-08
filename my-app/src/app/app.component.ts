
import { Component, OnInit } from '@angular/core';

// import $ = require("jquery");
// import { $ } from 'jquery'

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
    $().toastmessage("showToast", { text: "oh, yeah!" });
  }
}
