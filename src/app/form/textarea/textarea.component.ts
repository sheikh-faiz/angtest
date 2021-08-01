import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  @Input() placeholder: string;
  @Input() value: string;
  @Output() setInput = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
     
  }
}
