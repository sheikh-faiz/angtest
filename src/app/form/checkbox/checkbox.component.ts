import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() fieldValue:string;
  @Input() text:string; 
  @Output() toggleCheckbox = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
