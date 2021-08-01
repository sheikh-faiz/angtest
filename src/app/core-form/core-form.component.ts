import { Component, Input, OnInit } from '@angular/core';
import { FormJson } from '../models/form.model';

@Component({
  selector: 'app-core-form',
  templateUrl: './core-form.component.html',
  styleUrls: ['./core-form.component.css']
})
export class CoreFormComponent implements OnInit {
  @Input() formJson:FormJson;
  constructor() { }

  ngOnInit(): void {
  }
  addOption(i){ 
    this.formJson[i].option.push({value:'',text:''})
  }
}
