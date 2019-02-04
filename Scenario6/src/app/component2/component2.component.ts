import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  message :string ="From Component2"
  constructor() { }

  @Output() messageEvent = new EventEmitter<string>()
  sendMessage()
  {
    this.messageEvent.emit(this.message);
  }
  ngOnInit() {
  }

}
