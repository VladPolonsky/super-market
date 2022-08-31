import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmincheckService {
  public isAdmin = new BehaviorSubject<Boolean>(false);
  constructor() { }

  getIsAdmin(){
    return this.isAdmin.value
  }

  setIsAdmin(isAdmin:Boolean){
  this.isAdmin.next(isAdmin)
  }
}
