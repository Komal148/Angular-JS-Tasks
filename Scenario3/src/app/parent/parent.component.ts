import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  template : ` <app-child [childMessage] = "parentMessage" > </app-child>`
})
export class ParentComponent implements OnInit {

  parentMessage="message from Parent";
  constructor() { }

  ngOnInit() {
  }

}
