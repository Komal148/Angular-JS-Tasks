import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // message1 : string = " from Parent ";
  message :string;
  constructor() { }

  @Output() messageEvent=new EventEmitter<string>();
  receiveMessage( $event )
  {
    this.message=$event;
    this.messageEvent.emit(this.message);
  }

  // sendMessageToGrand()
  // {
  //    this.messageEvent1.emit(this.message1);
  // }
  ngOnInit() {
  }

}
