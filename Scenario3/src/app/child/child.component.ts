import { Component, OnInit,Input } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  template: `Say {{ childMessage }}`
})
export class ChildComponent implements OnInit {

  @Input() childMessage : string ;
  constructor() { }

  ngOnInit() {
  }

}
