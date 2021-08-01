import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  
  @Input() formData: string[];
  @Input() uniqueId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
