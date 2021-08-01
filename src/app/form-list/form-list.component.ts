import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeleteFormPopupComponent } from '../delete-form-popup/delete-form-popup.component';
import { FormJson, FormList } from '../models/form.model';
import { ApiService } from '../service/api.service'; 

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
})
export class FormListComponent implements OnInit {
  formpreview:Observable<FormList[]>;
  @Output() emitData = new EventEmitter();
  constructor(private store: AngularFirestore, private dialog: MatDialog, private apiService: ApiService) {}
  ngOnInit(): void {
    this.formpreview = this.apiService.getForms();
  }
  deleteForm(id:string): void {
    const dialogRef = this.dialog.open(DeleteFormPopupComponent, {
      width: '270px',
      data: {
        id: id,
      },
    });
  }
  Preview(data:FormJson[], id:string) {
    this.emitData.emit({ data: data, formId: id });
  }
}
