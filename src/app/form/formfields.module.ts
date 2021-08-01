import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    TextareaComponent,
    SelectComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    AngularFirestoreModule,
    MatInputModule,
    MatDialogModule ,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
  exports: [
    InputComponent,
    CheckboxComponent,
    TextareaComponent,
    SelectComponent,
    RadioComponent
  ]
})
export class FormFieldsModule { }
