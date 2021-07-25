import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css'],
})
export class FormPreviewComponent implements OnInit, OnChanges {
  formpreview: any;
  options: FormGroup;
  formData = {};
  @Input() data = [];
  @Input() formId;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  constructor(fb: FormBuilder, private apiService: ApiService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit(): void {}
  saveData() {
    console.log({ data: this.formData, formId: this.formId });
    this.apiService.addFormData({ data: this.formData, formId: this.formId });
  }
  ngOnChanges() {
    console.log(this.formData);
    this.data.forEach((e) => {
      this.formData[e.uniqueId] = { value: '' };
    });
  }
  toggleCheckbox(e, v) {
    console.log(e);
    if (e.checked) {
      this.formData[v.uniqueId] = v.fieldValue;
    } else {
      this.formData[v.uniqueId] = '';
    }
    //
  }
}
