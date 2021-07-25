import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as formJson from '../../assets/json/form-builder.json';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  formName = '';
  jsonData = [];
  formId = null;
  inputJson = [
    {
      type: 'input',
      placeholder: '',
      id: '',
      class: '',
      name: 'Input',
      text: 'Placeholder',
      value: '',
    },
    {
      type: 'select',
      placeholder: '',
      id: '',
      class: '',
      name: 'Select',
      text: 'Placeholder',
      value: '',
      option: [],
    },
    {
      type: 'checkbox',
      placeholder: '',
      id: '',
      class: '',
      name: 'Checkbox',
      text: 'Checkbox Label',
      value: '',
      fieldValue: '',
    },
    {
      type: 'radio',
      placeholder: '',
      id: '',
      class: '',
      name: 'Radio',
      text: 'Text',
      value: '',
      fieldValue: '',
    },
    {
      type: 'textarea',
      placeholder: '',
      id: '',
      class: '',
      name: 'Textarea',
      text: 'Placeholder',
      value: '',
    },
    {
      type: 'label',
      placeholder: '',
      id: '',
      class: '',
      name: 'Label',
      text: 'Label',
      value: '',
    },
  ];
  builderJson = [];
  constructor(
    private store: AngularFirestore,
    private toastr: ToastrService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any | null>, isReorder: boolean): void {
    if (event.previousContainer === event.container) {
      return;

      // if(isReorder){
      //   transferArrayItem(event.previousContainer.data,
      //     event.container.data,
      //     event.previousIndex,
      //     event.currentIndex);
      // }else{
      // }
    }
    if (!event.container.data || !event.previousContainer.data) {
      console.log(event.previousContainer, event.container, 2);
      return;
    }
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  saveForm() {
    if (this.formName != '' && this.builderJson.length > 0) {
      this.builderJson.forEach((e) => {
        e.uniqueId = this.makeid(10);
      });
      this.apiService.addForm({ data: this.builderJson, name: this.formName });
    } else {
      this.toastr.error('Please confirm all fields are filled', 'Error');
    }
  }
  previewData(e) {
    console.log(e);
    this.jsonData = e.data;
    this.formId = e.formId;
  }
  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
