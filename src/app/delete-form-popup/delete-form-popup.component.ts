import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-delete-form-popup',
  templateUrl: './delete-form-popup.component.html',
  styleUrls: ['./delete-form-popup.component.css']
})
export class DeleteFormPopupComponent implements OnInit {

  private backupTask: any = { ...this.data };

  constructor(
    public dialogRef: MatDialogRef<DeleteFormPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: AngularFirestore
  ) {}

  cancel(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit(){
    
  }
  deleteForm(){ 
    this.store.collection('form-builder').doc(this.backupTask.id).delete();
    this.dialogRef.close(this.data);
  }
}
