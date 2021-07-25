import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(
        private store: AngularFirestore
      ){

      }

    addForm(data){
        this.store.collection('form-builder').add(data)
    }
    addFormData(data){
        this.store.collection('form-data').add(data)
    }
    getForms(){
        return this.store
        .collection('form-builder')
        .valueChanges({ idField: 'id' }) as Observable<any> 
    }
}