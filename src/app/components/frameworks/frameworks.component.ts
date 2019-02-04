import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent implements OnInit {

  frameworks: any[];

  constructor() {
    this.frameworks = [
      'Angular',
      '.NET',
      'Rails',
      'Django'
    ];
  }

  ngOnInit(): void {
    console.log("Frameworks OnInit");
  }
  
}