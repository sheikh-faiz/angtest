import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
   
  @Input() options:string[];
  @Input() value: string;
  @Output() setInput = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
