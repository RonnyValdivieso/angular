import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {

  languages:any = [];
  today = new Date(2011, 5, 25);
  createdAt = Date();

  constructor() {
    
    this.languages = [
      'Javascript',
      'Ruby',
      'Python',
      'Java',
      'PHP',
      'C#'
    ];
  }

  ngOnInit(): void {
    console.log("Languages OnInit");
  }

}