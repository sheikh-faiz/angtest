import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-form',
  templateUrl: './core-form.component.html',
  styleUrls: ['./core-form.component.css']
})
export class CoreFormComponent implements OnInit {
  @Input() formJson;
  constructor() { }

  ngOnInit(): void {
  }
  addOption(i){ 
    this.formJson[i].option.push({value:'',text:''})
  }
}
