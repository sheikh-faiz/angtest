import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() value: string;
  @Output() setInput = new EventEmitter()
  // @Input() uniqueId: string;
  constructor() {}

  ngOnInit(): void {}
}
