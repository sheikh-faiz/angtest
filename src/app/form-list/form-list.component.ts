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
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DeleteFormPopupComponent } from '../delete-form-popup/delete-form-popup.component';
import { ApiService } from '../service/api.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogResult } from '../task/task';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
})
export class FormListComponent implements OnInit {
  formpreview:any;
  list = [];
  @Output() emitData = new EventEmitter();
  constructor(private store: AngularFirestore, private dialog: MatDialog, private apiService: ApiService) {}
  ngOnInit(): void {
    this.formpreview = this.apiService.getForms()
    console.log(this.formpreview);
  }
  deleteForm(id): void {
    const dialogRef = this.dialog.open(DeleteFormPopupComponent, {
      width: '270px',
      data: {
        id: id,
      },
    });
  }
  Preview(data, id) {
    console.log({ data: data, formId: id });
    this.emitData.emit({ data: data, formId: id });
  }
}
