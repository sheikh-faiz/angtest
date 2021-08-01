import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment'; 
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import {MatListModule} from '@angular/material/list';
import { CoreFormComponent } from './core-form/core-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'; 
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormListComponent } from './form-list/form-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr'; 
import { FormFieldsModule } from './form/formfields.module';
import { DeleteFormPopupComponent } from './delete-form-popup/delete-form-popup.component';
@NgModule({
  declarations: [
    AppComponent, 
    FormBuilderComponent,
    CoreFormComponent, 
    FormPreviewComponent,
    FormListComponent,
    DeleteFormPopupComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    FormFieldsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
