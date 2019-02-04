import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message : string ='From Child to Parent to Grand Parent'
  constructor() { }

  @Output() messageEvent=new EventEmitter<string>();

  sendMessage()
  {
    this.messageEvent.emit(this.message);
  }
  ngOnInit() {
  }

}
