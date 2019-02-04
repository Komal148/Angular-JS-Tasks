import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message : string ='Carpe Diem!!'

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage()
  {
    this.messageEvent.emit(this.message);
  }
  constructor() { }

  ngOnInit() {
  }

}
