import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import formJson from '../../assets/json/form-builder.json';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { FormJson } from '../models/form.model';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  formName: string = '';
  jsonData: FormJson[] = [];
  formId = null;
  inputJson: FormJson[] = formJson;
  builderJson: FormJson[] = [];
  constructor(
    private store: AngularFirestore,
    private toastr: ToastrService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any | null>, isReorder: boolean): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      console.log(event.previousContainer, event.container, 2);
      return;
    }
   console.log( event.previousContainer.data,
    event.container.data,
    event.previousIndex,
    event.currentIndex)
    const dropedValue = event.previousContainer.data[event.previousIndex];
    this.builderJson.splice(event.currentIndex, 0, {...dropedValue});
    // copyArrayItem(
    //   event.previousContainer.data,
    //   event.container.data,
    //   event.previousIndex,
    //   event.currentIndex
    // );
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
  previewData(e: { data: FormJson[]; formId: string }) {
    this.jsonData = e.data;
    this.formId = e.formId;
  }
  makeid(length: number) {
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
