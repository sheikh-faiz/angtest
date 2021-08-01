import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormJson } from '../models/form.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css'],
})
export class FormPreviewComponent implements OnInit, OnChanges {
  options: FormGroup;
  formData = {};
  @Input() data: FormJson[] = [];
  @Input() formId: string;
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
    this.apiService.addFormData({ data: this.formData, formId: this.formId });
  }
  ngOnChanges() {
    console.log(this.data)
    this.data.forEach((e, i) => {
      if (this.formData[i] === undefined) {
        this.formData[i] = {};
      }
      this.formData[i][e.uniqueId] = { value: '' };
    });
  }
  toggleCheckbox(e, v, i) { 
    if (e.checked) {
      this.formData[i][v.uniqueId] = v.fieldValue;
    } else {
      this.formData[i][v.uniqueId] = '';
    }
    //
  }
}
